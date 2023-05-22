// IntersectionObserver を設定する関数
const setObserver = () => {
  // コールバック関数（第二引数に observer を受け取る） ※showTargetがコールバック関数
  const showTarget = (entries, observer) => {
    // 各 entry（IntersectionObserverEntry オブジェクト）に対して
    // 復数のentryをそれぞれ判別して個別に判別できるようにしている
    entries.forEach((entry) => {
      // 監視対象の要素が領域内に入った場合の処理、監視対象が交差している場合はtrue
      if (entry.isIntersecting) {
        // 監視対象の要素（entry.target）に is-show クラスを追加
        entry.target.classList.add('is-show');
        // unobserve() メソッドで各要素の監視を停止
        observer.unobserve(entry.target);
      }
    });
  };

  // オプション
  const options = {
    // コールバック関数を呼び出すタイミングを指定、監視対象が50%表示されたら
    threshold: [0.5],
  };

  // 引数にコールバック関数とオプションを指定してオブザーバーを生成
  const observer = new IntersectionObserver(showTarget, options);

  // 監視対象の要素（js-showTarget クラスを指定した要素）を全て取得
  const targets = document.querySelectorAll('.js-showTarget');

  // 全ての監視対象要素を observe() メソッドに指定
  // 復数のjs-showTargetクラスをそれぞれ判別して個別に判別できるようにしている
  targets.forEach((target) => {
    // observe() に監視対象の要素を指定、監視の実行
    observer.observe(target);
  });
};

export default setObserver;

// 参考
// https://www.webdesignleaves.com/pr/jquery/intersectionObserverAPI-basic.html
