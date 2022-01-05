# ライブラリへのパッチ

## スプラッシュスクリーンの表示を柔軟にする

`expo-splash-screen`は、Androidではデフォルトでは単純に1枚の画像を拡大・縮小して表示することしかできません。（特にAndroidでは、`ImageView.ScaleType.CENTER`で表示することしかできない）

今回は、複数の画像を中央で画面サイズに合わせて表示したり、下揃えで表示したりする必要があります。それを可能にするためにパッチを当てています。`native`を指定したときに`ImageView.ScaleType.FIT_XY`が利用されるように変更）

## `npm run ios`実行時に発生する警告を抑止するパッチ

Xcode 13から、`xcodebuild`の実行時に常に`destination`が適切に指定される必要があるようです。

`@react-native-community/cli`では、内部でXcodeのビルド設定を取得するときにdestinationを指定していないため、以下のような警告が表示されます。

> --- xcodebuild: WARNING: Using the first of multiple matching destinations:

動作には特に問題はなかったですが、警告を放置するのは問題があるのでパッチを当てて対応しています。

## Podfile.lockにdiffが出ないようにするパッチ

React Native 0.64.3ではReact Nativeに含まれるPodのpodspecの内容が`pod install`した環境によって異なるという問題があります。この問題のため、`Podfile.lock`の内容も環境によって異なるものになってしまいます。

[Diff in Podfile.lock when runs in different machines](https://github.com/facebook/react-native/issues/31121#issuecomment-802182459)

[このコミット](https://github.com/facebook/react-native/commit/bdfe2a51791046c4e6836576e08655431373ed67)で解決されているので、内容をパッチとして取り込んでいます。