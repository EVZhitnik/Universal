class ColorBookmark {

    selectors = {
        root: '[data-js-bookmark]',
    }

    stateClasses = {
        isBase: 'notes-blog__bookmark-color-base',
        isActive: 'notes-blog__bookmark-color-active'
    }

    constructor() {
        this.rootElements = document.querySelectorAll(this.selectors.root);
        this.changeColor();
    }

    changeColor = () => {
        this.rootElements.forEach(icon => {
            icon.classList.add(this.stateClasses.isBase);
            
            icon.addEventListener('click', () => {
                icon.classList.toggle(this.stateClasses.isBase);
                icon.classList.toggle(this.stateClasses.isActive);
            });
        });
    }
}

export default ColorBookmark;