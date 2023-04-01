export default class Slider {
    constructor({
        container = null,
        triggers = null,
        next = null,
        prev = null,
        activeClass = '',
        animate = false,
        autoplay = false
    } = {}) {
        this.container = document.querySelector(container);
        this.buttons = document.querySelectorAll(triggers);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.slides = this.container.children;
        this.slidesLength = this.slides.length;
        this.slideIndex = 1;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoplay = autoplay;
    }
}