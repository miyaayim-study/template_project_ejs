module.exports = {
  env: {
    browser: true, // ブラウザで動作することを指定
    es2021: true, // ES2021を使うことを指定
  },
  extends: 'airbnb-base', // AirbnbのJavaScriptスタイルガイドを基準に検証
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest', // 最新のECMAScriptを使用することを指定
    sourceType: 'module', // モジュールを使用することを指定
  },
  rules: {
    "linebreak-style": 0, // 改行コードの指定に関するエラーを非表示にする
    "import/no-unresolved": 0, // モジュールが見つからなかった場合のエラーを非表示にする
  },
};
