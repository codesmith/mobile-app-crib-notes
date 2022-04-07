#import "AppDelegate.h"

// アプリ起動時に、以下の警告メッセージが表示されるため、RCTDevLoadingViewをimportします
// 「RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks」
// https://github.com/facebook/react-native/issues/16376
#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTRootView.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTConvert.h>

#import <Firebase.h>
// isHeadlessを取得できるようにする
// https://rnfirebase.io/messaging/usage#background-application-state
#import "RNFBMessagingModule.h"

#if defined(FB_SONARKIT_ENABLED) && __has_include(<FlipperKit/FlipperClient.h>)
#import <FlipperKit/FlipperClient.h>
#import <FlipperKitLayoutPlugin/FlipperKitLayoutPlugin.h>
#import <FlipperKitUserDefaultsPlugin/FKUserDefaultsPlugin.h>
#import <FlipperKitNetworkPlugin/FlipperKitNetworkPlugin.h>
#import <SKIOSNetworkPlugin/SKIOSNetworkAdapter.h>
#import <FlipperKitReactPlugin/FlipperKitReactPlugin.h>

static void InitializeFlipper(UIApplication *application) {
  FlipperClient *client = [FlipperClient sharedClient];
  SKDescriptorMapper *layoutDescriptorMapper = [[SKDescriptorMapper alloc] initWithDefaults];
  [client addPlugin:[[FlipperKitLayoutPlugin alloc] initWithRootNode:application withDescriptorMapper:layoutDescriptorMapper]];
  [client addPlugin:[[FKUserDefaultsPlugin alloc] initWithSuiteName:nil]];
  [client addPlugin:[FlipperKitReactPlugin new]];
  [client addPlugin:[[FlipperKitNetworkPlugin alloc] initWithNetworkAdapter:[SKIOSNetworkAdapter new]]];
  [client start];
}
#endif

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  if ([FIRApp defaultApp] == nil) {
    [FIRApp configure];
  }
#if defined(FB_SONARKIT_ENABLED) && __has_include(<FlipperKit/FlipperClient.h>)
  InitializeFlipper(application);
#endif

  RCTBridge *bridge = [self.reactDelegate createBridgeWithDelegate:self launchOptions:launchOptions];

  // アプリ起動時に、以下の警告メッセージが表示されるため、RCTDevLoadingViewをロードします
  // 「RCTBridge required dispatch_sync to load RCTDevLoadingView. This may lead to deadlocks」
  // https://github.com/facebook/react-native/issues/16376
  #if RCT_DEV
    [bridge moduleForClass:[RCTDevLoadingView class]];
  #endif

  // isHeadlessを取得できるように、launchOptionsをappPropertiesに格納
  // https://rnfirebase.io/messaging/usage#background-application-state
  NSDictionary *appProperties = [RNFBMessagingModule addCustomPropsToUserProps:nil withLaunchOptions:launchOptions];

  // isHeadlessを取得できるように、initialPropertiesにappPropertiesを指定
  // https://rnfirebase.io/messaging/usage#background-application-state
  // RCTRootView *rootView = [self.reactDelegate createRootViewWithBridge:bridge moduleName:@"main" initialProperties:nil];
  RCTRootView *rootView = [self.reactDelegate createRootViewWithBridge:bridge moduleName:@"main" initialProperties:appProperties];
  rootView.backgroundColor = [UIColor whiteColor];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [self.reactDelegate createRootViewController];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];

  [super application:application didFinishLaunchingWithOptions:launchOptions];

  return YES;
 }

- (NSArray<id<RCTBridgeModule>> *)extraModulesForBridge:(RCTBridge *)bridge
{
  // If you'd like to export some custom RCTBridgeModules, add them here!
  return @[];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge {
 #ifdef DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index" fallbackResource:nil];
 #else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
 #endif
}

// Linking API
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  return [super application:application openURL:url options:options] || [RCTLinkingManager application:application openURL:url options:options];
}

// Universal Links
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
  BOOL result = [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
  return [super application:application continueUserActivity:userActivity restorationHandler:restorationHandler] || result;
}

@end
