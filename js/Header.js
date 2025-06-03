function initializeHeader() {
    const selectors = {
        root: '[data-js-header]',
        overlay: '[data-js-header-overlay]',
        burgerButton: '[data-js-header-burger-button]',
    };

    const stateClasses = {
        isActive: 'is-active',
        isLock: 'is-lock',
    };

    const rootElement = document.querySelector(selectors.root);
    if (!rootElement) return;

    const overlayElement = rootElement.querySelector(selectors.overlay);
    const burgerButtonElement = rootElement.querySelector(selectors.burgerButton);
    if (!burgerButtonElement || !overlayElement) return;

    function burgerButtonClick() {
        burgerButtonElement.classList.toggle(stateClasses.isActive);
        overlayElement.classList.toggle(stateClasses.isActive);
        document.documentElement.classList.toggle(stateClasses.isLock);
    }

    function bindEvents() {
        burgerButtonElement.addEventListener('click', burgerButtonClick);
    }

    bindEvents();
}

export default initializeHeader;