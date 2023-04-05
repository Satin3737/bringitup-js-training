export default class ShowInfo {
    constructor(triggers) {
        this.buttons = document.querySelectorAll(triggers);
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                const content = btn.closest('.module__info-show').nextElementSibling;
                content.classList.add('animated', 'fadeIn');
                content.style.display = 'block';
            });
        });
    }
    
}