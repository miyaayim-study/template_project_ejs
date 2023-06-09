import { dir } from "../config.mjs"; // ファイルパス格納
import browserSync from 'browser-sync'; // browser-syncのプラグインの読み込み



// Browsersync起動
const server = (done) => { // "sever"というgulpタスクを定義、 (done)はラストのdone()でタスク完了の合図を受け取るためのもの
  browserSync({ // BrowserSyncライブラリを初期化するメソッドらしい
    server : {
      open: "external", // ローカルIPアドレスを使って外部デバイスからWebサイトを開ける
      baseDir : dir.dist.root, // ルートとなるディレクトリを指定（これがないとCSSとJSがブラウザに反映されなかった）
      index: 'index.html', // 読み込むHTMLファイル
    },
    notify: false, // リロード時にブラウザ右上に表示される接続メッセージを非表示
    // reloadDelay: 1000,//リロードの遅延
    // open: false, //起動時のライブリロードを止める
  });
  done(); //done()でタスク完了の信号を出す
};

// リロード実行
const reload = (done) => { // "reload"というgulpタスクを定義、 (done)はラストのdone()でタスク完了の合図を受け取るためのもの
  browserSync.reload(); // 同期しているブラウザをリロード
  done(); //done()でタスク完了の信号を出す
};

export { server, reload };


