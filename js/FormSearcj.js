class FormSearch {
    selectors = {
        root: '[data-js-form-search]',
        bodyForm: '[data-js-form-search-body]',
        buttonForm: '[data-js-form-search-button]',
        inputForm: '[data-js-form-search-input]'
    }

    stateClasses = {
        isActive: 'is-active'
    }

    constructor () {
        this.rootElement = document.querySelector(this.selectors.root);
        this.bodyFormElement = this.rootElement.querySelector(this.selectors.bodyForm);
        this.buttonFormElement = this.rootElement.querySelector(this.selectors.buttonForm);
        this.inputFormElement = this.rootElement.querySelector(this.selectors.inputForm);
        this.bindEvents();
    }

    formButtonClick = () => {
        this.bodyFormElement.classList.toggle(this.stateClasses.isActive);
        this.inputFormElement.classList.toggle(this.stateClasses.isActive);

        if (this.bodyFormElement.classList.contains(this.stateClasses.isActive)) {
            this.inputFormElement.focus();
        }
    }

    bindEvents() {
        this.buttonFormElement.addEventListener('click', this.formButtonClick);
    }
}

export default FormSearch;