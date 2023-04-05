import Slider from "./slider.js";

export default class SliderMini extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }
    
    decorSliders() {
        for (let slide of this.slides) {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                slide.querySelector('.card__title').style.opacity = '0.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        }
        
        this.slides[0].classList.add(this.activeClass);
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    
    nextSlide() {
        let i = 0;
        let btnIndexes = [];
        
        for (let item of this.slides) {
            if (item.type === 'button') {
                btnIndexes.push(i);
            }
            i++;
        }
        
        let last = Math.min(...btnIndexes);
        this.container.insertBefore(this.slides[0], this.slides[last]);
        this.decorSliders();
    }
    
    bindTriggers() {
        this.next.forEach(btn => btn.addEventListener('click', () => {
            this.nextSlide();
        }));
        
        this.prev.forEach(btn => btn.addEventListener('click', () => {
            for (let i = this.slidesLength - 1; i > 0; i--) {
                if (this.slides[i].type !== 'button') {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorSliders();
                    break;
                }
            }
        }));
    }
    
    sliderPlay() {
        if (this.autoplay) {
            setInterval(() => {
                this.nextSlide();
            }, 3000);
        }
    }
    
    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `
        this.bindTriggers();
        this.decorSliders();
        this.sliderPlay();
    }
}