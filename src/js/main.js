import Slider from "./modules/slider.js";
import VideoPlayer from "./modules/videoPlayer.js";

window.addEventListener('DOMContentLoaded', () => {
    const slider = new Slider('.page', '.next');
    const player = new VideoPlayer('.showup .play', '.overlay');
    
    slider.render();
    player.init();
});
