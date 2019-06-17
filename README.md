# js-css-refresher

CSSのキャッシュを削除するために、ファイル名の後ろにクエリをつけるJS
https://nkmrkisk.com/archives/1723

CSSはブラウザで自動でキャッシュされるため、CSSの更新をしても中々反映されないことがある。

cssの後ろにクエリを入れると、ブラウザが違うファイルだと認識して読み取ってくれる

```
例）
example.com/asset/css/style.css
↓
example.com/asset/css/style.css?00001
```
なので、それをJSで読み込みの度にクエリを追加してくれるようにした


