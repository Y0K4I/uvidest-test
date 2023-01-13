const swiperEl = document.getElementById('swiper');

const swiper = new Swiper(swiperEl, {
    autoplay: {
        delay: 3000
    },
    centeredSlides: true,
    initialSlide: 2,
    spaceBetween: 50,
    slidesPerView: 'auto',
    loop: true,
});

swiperEl.addEventListener('mouseenter', () => {
    swiper.autoplay.stop();
});

swiperEl.addEventListener('mouseleave', () => {
    swiper.autoplay.start();
});


