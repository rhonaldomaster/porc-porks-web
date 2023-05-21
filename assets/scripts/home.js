(() => {
  const swiper = generateSwiper({
    containerSelector: '.js-swiper-home',
    effect: 'fade',
    loop: true,
    nextButtonSelector: '.js-swiper-button-next',
    paginationSelector: '.js-swiper-pagination',
    prevButtonSelector: '.js-swiper-button-prev',
  });
})();
