function updateReactions() {
    const selectors = {
        root: '[data-js-reactions]',
        numberReactions: '[data-js-comments-number]',
        buttonLike: '[data-js-comments-btn-like]',
        buttonDislike: '[data-js-comments-btn-dislike]',
    }

    const stateClasses = {
        colorBase: 'is-base',
        colorGreen: 'is-green',
        colorRed: 'is-red',
    }

    const rootElements = document.querySelectorAll(selectors.root);

    rootElements.forEach(reaction => {
        const numberReactionsElement = reaction.querySelector(selectors.numberReactions);
        const buttonLikeElement = reaction.querySelector(selectors.buttonLike);
        const buttonDislikeElement = reaction.querySelector(selectors.buttonDislike);

        const formatNumberReaction = (value) => {
            if (value > 0) return `+${value}`;
            if (value < 0) return `${value}`;
            return 0;
        }

        const updateValue = (newValue) => {
            numberReactionsElement.textContent = formatNumberReaction(newValue);

            numberReactionsElement.classList.remove(
                stateClasses.colorBase,
                stateClasses.colorGreen,
                stateClasses.colorRed
            );

            if (newValue > 0) {
                numberReactionsElement.classList.add(stateClasses.colorGreen);
            } else if (newValue < 0) {
                numberReactionsElement.classList.add(stateClasses.colorRed);
            } else {
                numberReactionsElement.classList.add(stateClasses.colorBase);
            }
        };

        buttonLikeElement.addEventListener('click', () => {
            const currentValue = parseInt(numberReactionsElement.textContent);
            updateValue(currentValue + 1);
        });

        buttonDislikeElement.addEventListener('click', () => {
            const currentValue = parseInt(numberReactionsElement.textContent);
            updateValue(currentValue - 1);
        });

        const initialValue = parseInt(numberReactionsElement.textContent);
        updateValue(initialValue);
    });
}

export default updateReactions;