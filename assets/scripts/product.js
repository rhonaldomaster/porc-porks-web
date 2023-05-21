(() => {
  const swiperThumbs = generateSwiper({
    containerSelector: '.js-swiper-thumbs',
    slidesPerView: 4,
    breakpoints: {
      768: {
        direction: 'vertical',
        slidesPerView: 4
      }
    }
  });
  const swiperProduct = generateSwiper({
    containerSelector: '.js-swiper-product',
    nextButtonSelector: '.js-swiper-button-next',
    prevButtonSelector: '.js-swiper-button-prev',
    thumbs: swiperThumbs
  });
})();
