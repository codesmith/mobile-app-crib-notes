const fs = require('fs');

/**
 * @typedef License
 * @property {boolean?} exclude ライセンス不明なものを除外するため(build 処理にのみ使用され成果物に含まれない場合のみ除外可能)
 * @property {string?} licenseName
 * @property {string?} licenseUrl
 * @property {string?} licenseText
 */

/**
 * @returns {Object.<string, Object.<string, License>>}
 */
module.exports = function () {
  return {
    npm: {
      '@segment/loosely-validate-event@2.0.0': { // https://www.npmjs.com/package/@segment/loosely-validate-event
        licenseName: 'MIT',
      },
      'readline@1.3.0': { // https://www.npmjs.com/package/readline
        /**
         * ライセンス詳細が不明なため除外する ("BSD" のみ README に記載されているが具体的なバージョン不明)
         * build に使用される cli でのみ使用されているためアプリには使用されていないため除外OK
         * !WARNING! ライブラリ変更時、"@react-native-community/cli-plugin-metro"("@react-native-community/cli") 以外で使用されていないかの確認が必要
         */
        exclude: true, 
      },
      'valid-url@1.0.9': { // https://www.npmjs.com/package/valid-url
        licenseName: 'MIT',
        licenseUrl: 'https://github.com/ogt/valid-url/blob/v1.0.9/LICENSE',
      },
      '@react-native/assets@1.0.0': { // https://github.com/facebook/react-native/blob/v0.70.5/packages/assets/package.json
        licenseUrl: 'https://github.com/facebook/react-native/blob/v0.70.5/LICENSE',
      },
      '@react-native/normalize-color@2.1.0': { // https://github.com/facebook/react-native/blob/v0.71.0/packages/normalize-color/package.json
        licenseUrl: 'https://github.com/facebook/react-native/blob/v0.71.0/LICENSE',
      },
      '@react-native/polyfills@2.0.0': { // https://github.com/facebook/react-native/blob/v0.70.5/packages/polyfills/package.json
        licenseUrl: 'https://github.com/facebook/react-native/blob/v0.70.5/LICENSE',
      },
      'metro-babel-transformer@0.73.9': { // https://github.com/facebook/metro/blob/v0.73.9/packages/metro-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.9/LICENSE',
      },
      'metro-babel-transformer@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-cache-key@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-cache-key/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-cache@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-cache/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-inspector-proxy@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-inspector-proxy/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-minify-terser@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-minify-terser/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-minify-uglify@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-minify-uglify/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-react-native-babel-transformer@0.73.9': { // https://github.com/facebook/metro/blob/v0.73.9/packages/metro-react-native-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.9/LICENSE',
      },
      'metro-react-native-babel-transformer@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-react-native-babel-transformer/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-runtime@0.73.9': { // https://github.com/facebook/metro/blob/v0.73.9/packages/metro-runtime/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.9/LICENSE',
      },
      'metro-runtime@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-runtime/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-symbolicate@0.73.9': { // https://github.com/facebook/metro/blob/v0.73.9/packages/metro-symbolicate/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.9/LICENSE',
      },
      'metro-symbolicate@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-symbolicate/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-transform-plugins@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-transform-plugins/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'metro-transform-worker@0.73.10': { // https://github.com/facebook/metro/blob/v0.73.10/packages/metro-transform-worker/package.json
        licenseUrl: 'https://github.com/facebook/metro/blob/v0.73.10/LICENSE',
      },
      'tr46@0.0.3': { // https://github.com/jsdom/tr46/tree/0.0.3
        licenseUrl: 'https://github.com/jsdom/tr46/blob/3a6f29721e7063b9ffd421e461a54beae6170001/LICENSE.md', // v0.0.3 の次の commit で追加されている
      },
    },
    gradle: {
      'com.parse.bolts:bolts-tasks:1.4.0': { // https://github.com/BoltsFramework/Bolts-Android
        licenseName: 'BSD-3-Clause', // 名称だけ厳密にする(元: BSD License: https://github.com/BoltsFramework/Bolts-Android/blob/1.4.0/LICENSE)
      },
      'com.facebook.device.yearclass:yearclass:2.1.0': { // https://github.com/facebook/device-year-class
        licenseName: 'BSD-3-Clause', // 名称だけ厳密にする(元: BSD License: https://github.com/facebookarchive/device-year-class/blob/a6dc1f304da919a8bf4105ae35babfb51d04531d/LICENSE)
      },
      'app.notifee:core:202108261754': { // https://github.com/invertase/notifee/tree/%40notifee/react-native%405.7.0/packages/react-native/android/libs/app/notifee/core/202108261754
        licenseName: 'Apache-2.0',
        licenseUrl: 'https://github.com/invertase/notifee/blob/%40notifee/react-native%405.7.0/LICENSE', // https://notifee.app/license-terms/
      },
    },
    cocoapods: {
      'boost@1.76.0': { // https://github.com/boostorg/boost
        licenseName: 'BSL-1.0', // 名称だけ SPDX 形式に変更する (元: Boost Software License)
      },
      'glog@0.3.5': { // https://github.com/google/glog
        licenseName: 'BSD-3-Clause', // https://code.google.com/archive/p/google-glog/ (元: "Google" https://github.com/facebook/react-native/blob/v0.70.5/third-party-podspecs/glog.podspec#L9)
      },
      'GoogleDataTransport@9.2.3': {
        licenseName: 'Apache-2.0', // 名称だけ SPDX 形式に変更する (元: Apache)
      },
      'GoogleUtilities@9aa0ad5a7bc171f8bae016300bfcfa3fb8425749': {
        licenseName: 'Apache-2.0', // 名称だけ SPDX 形式に変更する (元: Apache)
      },
    },
  };
};
