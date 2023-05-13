(() => {
  const swiper = new Swiper('.js-swiper-home', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: '.js-swiper-pagination',
    },
    navigation: {
      nextEl: '.js-swiper-button-next',
      prevEl: '.js-swiper-button-prev',
    },
    a11y: {
      prevSlideMessage: 'Diapositiva anterior',
      nextSlideMessage: 'Diapositiva siguiente',
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
})();
