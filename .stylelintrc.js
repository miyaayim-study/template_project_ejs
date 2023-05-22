module.exports = {
  "extends": [
    'stylelint-config-recommended-scss', // 構文チェックSCSS（CSSもできる）
    'stylelint-config-recommended', // 構文チェックCSS
    "stylelint-config-recess-order" // プロパティ順序の規則、fixでの整列はここをみてるはず
  ],
  "rules": {
    "no-descending-specificity": null, // CSSの優先度が低いセレクタでスタイルを上書きすることを禁止するルールを無効化する
    "font-family-no-duplicate-names": null, // 同じ名前のフォントファミリーが複数回定義されている場合に警告するルールを無効化する
    "no-duplicate-selectors": null // 同じセレクタが複数回使用されている場合に警告するルールを無効化する
  }
};