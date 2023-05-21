function generateSwiper(settings = {}) {
  if (
    !settings.containerSelector ||
    !document.querySelector(settings.containerSelector)
  ) {
    return null;
  }

  const swiperOptions = {
    speed: 400,
    spaceBetween: 0,
    a11y: {
      prevSlideMessage: 'Diapositiva anterior',
      nextSlideMessage: 'Diapositiva siguiente',
    },
    fadeEffect: {
      crossFade: true
    },
  };

  if (settings.paginationSelector) {
    swiperOptions.pagination = {
      el: settings.paginationSelector
    };
  }

  if (settings.nextButtonSelector || settings.prevButtonSelector) {
    swiperOptions.navigation = {
      nextEl: settings.nextButtonSelector || false,
      prevEl: settings.prevButtonSelector || false,
    };
  }

  if (settings.slidesPerView) {
    swiperOptions.slidesPerView = settings.slidesPerView;
  }

  if (settings.spaceBetween) {
    swiperOptions.spaceBetween = settings.spaceBetween;
  }

  if (settings.thumbs) {
    swiperOptions.thumbs = {
      swiper: settings.thumbs
    };
  }

  if (settings.loop) {
    swiperOptions.loop = settings.loop;
  }

  if (settings.effect) {
    swiperOptions.effect = settings.effect;
  }

  if (settings.direction) {
    swiperOptions.direction = settings.direction;
  }

  if (settings.breakpoints) {
    swiperOptions.breakpoints = settings.breakpoints;
  }

  return new Swiper(settings.containerSelector, swiperOptions);
}
