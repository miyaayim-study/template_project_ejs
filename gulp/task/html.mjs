import { dir } from "../config.mjs"; // ファイルパス格納
import gulp from 'gulp'; // gulpモジュールを読み込む
import plumber from "gulp-plumber"; // gulp-plumberモジュールを読み込む
import notify from "gulp-notify"; // gulp-notifyモジュールを読み込む
import ejs from "gulp-ejs"; // "gulp-renameモジュールを読み込む
import rename from "gulp-rename"; // "gulp-renameモジュールを読み込む
import htmlbeautify from "gulp-html-beautify"; // "gulp-html-beautifyモジュールを読み込む
import htmlhint from 'gulp-htmlhint'; // gulp-htmlhintのプラグインの読み込み
import fs from 'fs'; // ファイルシステム(fs)モジュールを読み込む

const html = (done) => { // "ejs"というgulpタスクを定義
	const json_path = dir.src.html + "data/site.json";
  const json = JSON.parse(fs.readFileSync(json_path));

	gulp.src([dir.src.ejs + '**/*.ejs', "!" + dir.src.ejs + '**/_*.ejs']) // ejsファイルを指定、_で始まるファイルは除外
    .pipe(plumber({ // gulp-plumberでエラー検出時に監視タスクを中断しないようにする
      errorHandler: notify.onError({ // gulp-notifyでエラー検出時にデスクトップ通知する
        title: 'EJSコンパイル: <%= error.name %>', // デスクトップ通知時のタイトル
        message: '原因: <%= error.message %>' // デスクトップ通知時の本文
      })
    }))
		.pipe(ejs({ // EJSのHTMLコンパイルを実行
			json: json, // オブジェクトjsonをjson（site.json）に渡す(jsonの名前は自由に変更可、index.ejsでその名前を使用する)
		}))
		.pipe(
      htmlbeautify({
        indent_size: 2, //インデントサイズ
        indent_char: " ", // インデントに使う文字列はスペース1こ
        max_preserve_newlines: 0, // 許容する連続改行数
        preserve_newlines: false, //コンパイル前のコードの改行
        indent_inner_html: false, //head,bodyをインデント
        extra_liners: [], // 終了タグの前に改行を入れるタグ。配列で指定。head,body,htmlにはデフォで改行を入れたくない場合は[]。
      })
    )
		.pipe(rename({ // 出力時の名前変更
			basename: 'index', // ファイル名をindexに変更
			extname: '.html' // 拡張子をhtmlに変更
		}))
		.pipe(htmlhint('.htmlhintrc')) // htmlhintcの実行、設定内容は.htmlhintrcを参照する
    .pipe(htmlhint.reporter()) // 実行した結果をターミナルに表示
		.pipe(gulp.dest(dir.dist.html));
    done();
};

export default html;