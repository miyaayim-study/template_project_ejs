import { dir } from "../config.mjs"; // ファイルパス格納
import gulp from 'gulp'; // gulpモジュールを読み込む
import imagemin from 'gulp-imagemin'; // gulp-imageminのプラグインの読み込み
import { imgClean } from "./clean.mjs"; // ファイル削除 関連

const images = gulp.series(imgClean, (done) => { // "images"というgulpタスクを定義 、imgCleanでdist/imagesフォルダを削除してからタスクに移っている。
  setTimeout(() => { // 3秒待機する、多分だけど生成タイミングが早すぎてそれも削除されてしまってるからタイミングズラすために。
		gulp.src(dir.src.images + '**/*') // 圧縮するファイルを指定
			.pipe(imagemin()) // インポートしたimageminを実行
			.pipe(gulp.dest(dir.dist.images)) // 出力先ディレクトリを指定
			done(); //done()でタスク完了の信号を出す
  }, 3000); // 待機秒数
});

export default images;
