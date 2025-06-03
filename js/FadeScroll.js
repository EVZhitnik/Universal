const selectors = {
    root: '[data-js-header]',
    headerBottom: '[data-js-header-bottom]',
};

const stateClasses = {
    isHide: 'is-hide',
};

function initScrollHide() {
    const rootElement = document.querySelector(selectors.root);
    if (!rootElement) return;

    const block = rootElement.querySelector(selectors.headerBottom);
    if (!block) return;

    // Сохраняем исходное состояние display
    let isHidden = false;

    function toggleVisibility() {
        const scrollY = window.scrollY || window.pageYOffset;
        
        if (scrollY >= 150 && !isHidden) {
            block.classList.add(stateClasses.isHide);
            isHidden = true;
        } 
        else if (scrollY < 150 && isHidden) {
            block.classList.remove(stateClasses.isHide);
            isHidden = false;
        }
    }

    // Оптимизация скролла
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                toggleVisibility();
                ticking = false;
            });
            ticking = true;
        }
    });

    // Инициализация
    toggleVisibility();
}

export default initScrollHide;