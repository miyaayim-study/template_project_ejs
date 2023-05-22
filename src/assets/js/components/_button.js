const menuButton = () => {
  const button = document.querySelector('.js-menuButton');
  const menu = document.querySelector('.js-menu');
  button.addEventListener('click', () => {
    button.classList.toggle('is-open');
    menu.classList.toggle('is-open');
  });
  window.addEventListener('resize', () => {
    button.classList.remove('is-open');
    menu.classList.remove('is-open');
  });
};

export default menuButton;
