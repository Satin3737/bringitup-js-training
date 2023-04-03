import SliderMain from "./modules/slider/slider-main.js";
import VideoPlayer from "./modules/videoPlayer.js";
import SliderMini from "./modules/slider/slider-mini.js";
import Difference from "./modules/difference.js";
import Forms from "./modules/forms.js";

window.addEventListener('DOMContentLoaded', () => {
    
    new SliderMain({
        container: '.page',
        triggers: '.next'
    }).render();
    
    new SliderMini({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    }).init();
    
    new SliderMini({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
        animate: true
    }).init();
    
    new SliderMini({
        container: '.feed__slider',
        prev: '.feed__slider .slick-prev',
        next: '.feed__slider .slick-next',
        activeClass: 'feed__item-active'
    }).init();
    
    new VideoPlayer(
        '.showup .play',
        '.overlay'
    ).init();
    
    new Difference(
        '.officerold',
        '.officernew',
        '.officer__card-item'
    ).init();
    
    new Forms('.form').init();
});
