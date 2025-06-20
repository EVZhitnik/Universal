function initSwiper() {
    const swiper = new Swiper('.swiper', {
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

    return swiper;
}

export default initSwiper;