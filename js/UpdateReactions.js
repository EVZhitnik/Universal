const rootSelector = '[data-js-reactions]';

class UpdateReaction {
    selectors = {
        numberReactions: '[data-js-comments-number]',
        buttonLike: '[data-js-comments-btn-like]',
        buttonDislike: '[data-js-comments-btn-dislike]',
    }

    stateClasses = {
        colorBase: 'is-base',
        colorGreen: 'is-green',
        colorRed: 'is-red',
    }

    constructor(rootElement) {
        this.rootElement = rootElement;
        this.numberReactionsElement = this.rootElement.querySelector(this.selectors.numberReactions);
        this.buttonLikeElement = this.rootElement.querySelector(this.selectors.buttonLike);
        this.buttonDislikeElement = this.rootElement.querySelector(this.selectors.buttonDislike);
        this.initialValue = parseInt(this.numberReactionsElement.textContent);
        this.updateValue(this.initialValue);
        this.bindEvents();
    }

    formatNumberReaction = (value) => {
        if (value > 0) return `+${value}`;
        if (value < 0) return `${value}`;
        return 0;
    }

    updateValue = (newValue) => {
        this.numberReactionsElement.textContent = this.formatNumberReaction(newValue);

        this.numberReactionsElement.classList.remove(
            this.stateClasses.colorBase,
            this.stateClasses.colorGreen,
            this.stateClasses.colorRed
        );

        if (newValue > 0) {
            this.numberReactionsElement.classList.add(this.stateClasses.colorGreen);
        } else if (newValue < 0) {
            this.numberReactionsElement.classList.add(this.stateClasses.colorRed);
        } else {
            this.numberReactionsElement.classList.add(this.stateClasses.colorBase);
        }
    }

    likeElement = () => {
        const currentValue = parseInt(this.numberReactionsElement.textContent);
        this.updateValue(currentValue + 1);
    }

    dislikeElement = () => {
        const currentValue = parseInt(this.numberReactionsElement.textContent);
        this.updateValue(currentValue - 1);
    }

    initialValue = () => {
        parseInt(this.numberReactionsElement.textContent);
        this.updateValue();
    }

    bindEvents() {
        this.buttonLikeElement.addEventListener('click', this.likeElement);
        this.buttonDislikeElement.addEventListener('click', this.dislikeElement);
    }
}

class UpdateReactionCollection {
    constructor() {
        this.init();
    }

    init() {
        document.querySelectorAll(rootSelector).forEach(element => {
            new UpdateReaction(element);
        });
    }
}

export default UpdateReactionCollection;