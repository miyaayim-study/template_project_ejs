import path from 'path'; // Node.jsのpathモジュールをインポートして、path.resolve()メソッドを使用できるようにしている。
import ESLintPlugin from 'eslint-webpack-plugin'; // eslint-webpack-pluginをインポートして、ESLintを実行できるようにしている。

export default {
  mode: "development", // 開発モード（"development"）で動作するように設定（ソースマップ有効でJSファイルが出力される、本番環境では"production"に設定すると最適化された状態で出力される）

  // ※ `entry` と `output` は gulp側で指定しているので、ここでの設定はgulp経由せずにwebpack単独で実行した際に有効（訂正：jsだけだとここ入力しないとgulpで実行できなかった）
  entry: `./src/assets/js/main.js`, // エントリーポイント（メインとなる処理を行うJavaScriptファイル）の指定
  output: { // ファイルの出力設定
    path: path.resolve("./dist/assets/js"), //  出力ファイルのディレクトリ名
    filename: "main.js", // 出力ファイル名
  },

  module: {
    rules: [ // モジュールに対するルールを定義する

      // JSバンドル関係
      {
        test: /\.(js|jsx|ts|tsx)$/, // test = loaderを使う特定の拡張子を指定、今回は複数の拡張子に対応できるようにしてみた
        exclude: '/node_modules/', // Babelをかけないディレクトリを指定
        use: [ // use = testで指定した拡張子にloaderを使いwebpackが読み込めるようにする
          {
            loader: "babel-loader", // Babelを使ってJSXなどの新JS文法を旧JS文法に変換する

            // babel-loader のオプションを指定する
            options: {
              presets: [
                "@babel/preset-env",// ES5に変換
              ],
            },
          },
        ],
      },

      // swiper（カルーセル）のCSS読み込みのために追加
      {
        test: /\.css$/, // 正規表現で.cssファイルを検知するためのテスト条件
        use: [
          {
            loader: 'style-loader', // CSSをHTMLに適用するためのloader
          },
          {
            loader: 'css-loader', // CSSを読み込むためのloader
            options: { url: false }, // CSS内のURLを変換しないオプション
          },
        ],
        sideEffects: true, // production modeでもswiper-bundle.cssが使えるように
      },

    ],
  },
  target: ["web", "es5"], // ES5(IE11等)向けの指定（webpack 5以上で必要）
  resolve: { // モジュールを解決するためのオプション
    extensions: [".js", ".jsx", ".ts", ".tsx"]  // importやrequireで指定する際に、拡張子を省略できるようにする
  },
  plugins: [
    new ESLintPlugin({
      extensions: ['.js', '.jsx', '.ts', '.tsx'], // Lintをかける拡張子を指定
      exclude: '/node_modules/', // Lintをかけないディレクトリを指定
    }),
  ],
};