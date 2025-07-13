class InitSlider {
    constructor(selector, options) {
        this.selector = selector;
        this.options = options;
        this.slider = null;
        this.init();
    }

    init() {
        this.slider = new Swiper(this.selector, this.options);
        return this.slider;
    }
}

class InitSliderCollection {
    constructor() {
        this.sliders = {};
        this.init();
    }

    init() {
        this.sliders.hot = new InitSlider('.swiper-hot', {
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
        }).slider;

        this.sliders.top = new InitSlider('.swiper-top', {
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
        }).slider;

        this.sliders.articles = new InitSlider('.swiper-articles', {
            direction: 'horizontal',
            speed: 300,
            loop: true,
            autoplay: {
                delay: 3000, 
                disableOnInteraction: true, 
            },
            navigation: {
                nextEl: '.swiper-articles-button-next',
                prevEl: '.swiper-articles-button-prev',
            },
            keyboard: {
                enabled: true,
            },
        }).slider;
    }
}

export default InitSliderCollection;