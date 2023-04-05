import SliderMain from "./modules/slider/slider-main.js";
import VideoPlayer from "./modules/videoPlayer.js";
import ShowInfo from "./modules/showInfo.js";
import Download from "./modules/download.js";

window.addEventListener('DOMContentLoaded', () => {
    
    new SliderMain({
        container: '.moduleapp',
        triggers: '.next',
        next: '.nextmodule',
        prev: '.prevmodule'
    }).render();
    
    new VideoPlayer(
        '.module__video .play',
        '.overlay'
    ).init();
    
    new ShowInfo('.plus').init()
    
    new Download('.download', './download.jpg').init()
    
});