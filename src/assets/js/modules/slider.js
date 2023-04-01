export default class Slider {
    constructor(page, triggers) {
        this.page = document.querySelector(page);
        this.slides = Array.from(this.page.children);
        this.slidesLength = this.slides.length;
        this.buttons = document.querySelectorAll(triggers);
        this.slideIndex = 1;
    }
    
    showSlides(n) {
        if (n > this.slidesLength) {
            this.slideIndex = 1;
        }
        
        if (n < 1) {
            this.slideIndex = this.slidesLength;
        }
        
        this.slides.forEach(slide => {
            slide.style.display = 'none';
            this.slides[this.slideIndex - 1].style.display = 'block';
        });
    }
    
    changeSlides(n) {
        this.showSlides(this.slideIndex += n);
    }
    
    render() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.changeSlides(1);
            });
            
            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
            });
        });
        
        this.showSlides(this.slideIndex);
    }
}