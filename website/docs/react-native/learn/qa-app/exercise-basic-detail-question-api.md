---
title: 質問詳細画面のAPI呼び出し
sidebar_label: API呼び出し
hide_table_of_contents: true
---

画面表示に必要な情報をAPIで取得します。

[MSWの設定](/react-native/learn/qa-app/app-project-desc#msw%E3%81%AE%E8%A8%AD%E5%AE%9A)で設定した通り、MSWを使用してモックデータを返却するようにしています。

以下のAPI呼び出しを追加し、ソースコードに直接値を記載していた箇所をAPIの戻り値を使用するように修正してください。

| API名 | 呼び出しタイミング | 補足 |
|--|--|--|
| 質問取得 | 画面初期表示 | 選択された質問を取得 |
| いいね済の取得（質問） | 画面初期表示 | 選択された質問のいいね情報を取得 |
| いいねの実施（質問） | いいねボタン押下 | いいね未実施の場合 |
| いいねの取り消し（質問） | いいねボタン押下 | いいね済の場合 |