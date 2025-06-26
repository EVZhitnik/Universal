function initSwiper() {
    const swiperHot = new Swiper('.swiper-hot', {
        direction: 'horizontal',
        speed: 300,
        loop: true,

        autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
        },

        pagination: {
        el: '.swiper-custom__pagination',
        clickable: true,
        type: 'bullets',
        bulletClass: 'swiper-custom__bullet', 
        bulletActiveClass: 'swiper-custom__bullet-active',
        },

        keyboard: {
        enabled: true,
        },
    });

    const swiperTop = new Swiper('.swiper-top', {
        direction: 'horizontal',
        speed: 300,
        loop: true,

        autoplay: {
        delay: 3000, 
        disableOnInteraction: true, 
        },

        navigation: {
            nextEl: '.swiper-top-button-next',
            prevEl: '.swiper-top-button-prev',
        },

        keyboard: {
        enabled: true,
        },
    });

    return {
        hot: swiperHot,
        top: swiperTop
    };
}

export default initSwiper;