フロントエンドの開発環境等で、CSSのブラウザキャッシュをクリアするためのカンタンなスクリプトです。
本番環境での利用は、初期表示時の崩れや、Googleが発表したUX指標「コアウェブバイタル」に悪影響を及ぼすため、利用はオススメしません。

CSSのキャッシュを削除するために、ファイル名の後ろにクエリを付与しています。

### 利用方法
```
<script type="text/javascript" src="{$YOUR_WEB_ROOT}/{$YOUR_ASSET_PATH}/cssRefresh.js"></script>
```


