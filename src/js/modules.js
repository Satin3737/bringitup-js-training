import SliderMain from "./modules/slider/slider-main.js";

window.addEventListener('DOMContentLoaded', () => {
    
    new SliderMain({
        container: '.moduleapp',
        triggers: '.next',
        next: '.nextmodule',
        prev: '.prevmodule'
    }).render();
    
});