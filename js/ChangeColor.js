function changeColor() {
    const bookmarkIcons = document.querySelectorAll('[data-js-bookmark]');

    bookmarkIcons.forEach(icon => {
        icon.classList.add('notes-blog__bookmark-color');
        
        icon.addEventListener('click', () => {
            icon.classList.toggle('notes-blog__bookmark-color');
            icon.classList.toggle('notes-blog__bookmark-color-active');
        });
    });
}

export default changeColor;