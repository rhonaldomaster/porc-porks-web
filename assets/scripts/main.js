(() => {
  function toggleMenu(selector) {
    const menu = document.querySelector(selector);
    if (!menu) {
      return;
    }

    menu.classList.toggle('header__nav--visible');
    document.body.classList.toggle('stop-scrolling');
  }

  document.addEventListener('click', ev => {
    const target = ev.target;
    if (target.classList?.contains('js-toggle-main-menu')) {
      toggleMenu('.js-main-nav');
    }
  });
})();
