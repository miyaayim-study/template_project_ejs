import { dir } from "../config.mjs"; // ファイルパス格納
import { deleteAsync } from "del"; // delモジュールのdeleteAsyncを読み込む


// distフォルダ全てのファイル削除
const allClean = (done) => {
    deleteAsync([dir.dist.root]);
    done();
};

// HTMLファイル削除
const htmlClean = (done) => {
    deleteAsync([dir.dist.html + '**/*.html']);
    done();
};

// CSSファイル削除
const cssClean = (done) => {
    deleteAsync([dir.dist.stylesheets]);
    done();
};

// Javascriptsファイル削除
const jsClean = (done) => {
    deleteAsync([dir.dist.javascripts]);
    done();
};

// 画像ファイル削除
const imgClean = (done) => {
    deleteAsync([dir.dist.images]);
    done();
};

export { allClean, htmlClean, cssClean, jsClean, imgClean };