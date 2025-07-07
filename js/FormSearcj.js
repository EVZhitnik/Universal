function formSearch() {
    const selectors = {
        root: '[data-js-form-search]',
        bodyForm: '[data-js-form-search-body]',
        buttonForm: '[data-js-form-search-button]',
        inputForm: '[data-js-form-search-input]'
    }

    const stateClasses = {
        isActive: 'is-active'
    }

    const rootElement = document.querySelector(selectors.root);
    if (!rootElement) return;

    const bodyFormElement = rootElement.querySelector(selectors.bodyForm);
    const buttonFormElement = rootElement.querySelector(selectors.buttonForm);
    const inputFormElement = rootElement.querySelector(selectors.inputForm);

    function formButtonClick() {
        bodyFormElement.classList.toggle(stateClasses.isActive);
        inputFormElement.classList.toggle(stateClasses.isActive);

        if (bodyFormElement.classList.contains(stateClasses.isActive)) {
            inputFormElement.focus();
        }
    }

    function bindEvents() {
        buttonFormElement.addEventListener('click', formButtonClick);
    }

    bindEvents();
}

export default formSearch;