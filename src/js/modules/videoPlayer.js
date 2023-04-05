export default class VideoPlayer {
    constructor(triggers, overlay) {
        this.buttons = document.querySelectorAll(triggers);
        this.overlay = document.querySelector(overlay);
        this.close = this.overlay.querySelector('.close');
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }
    
    bindTriggers() {
        this.buttons.forEach((btn, i) => {
            
            try {
                if (i % 2 === 0) {
                    btn.closest('.module__video-item').nextElementSibling.setAttribute('data-disabled', 'true');
                }
            } catch (e) {}
            
            btn.addEventListener('click', () => {
                if (!btn.closest('.module__video-item') || btn.closest('.module__video-item').getAttribute('data-disabled') !== 'true') {
                    this.currentBtn = btn;
                    if (document.querySelector('iframe#frame')) {
                        this.overlay.style.display = 'flex';
                        if (this.url !== btn.dataset.url) {
                            this.url = btn.dataset.url;
                            this.player.loadVideoById({videoId: this.url});
                        }
                    } else {
                        this.url = btn.dataset.url;
                        this.createPlayer(this.url);
                    }
                }
            });
        });
    
        this.close.addEventListener('click', () => {
            this.player.pauseVideo();
            this.overlay.style.display = 'none';
        });
    }
    
    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: url,
            events: {
                'onStateChange': this.onPlayerStateChange
            }
        });
        
        this.overlay.style.display = 'flex';
    }
    
    onPlayerStateChange(state) {
        try {
            const blockedElem = this.currentBtn.closest('.module__video-item').nextElementSibling;
            const playIconSvg = this.currentBtn.querySelector('svg').cloneNode(true);
            if (state.data === 0) {
                const blockedCircle = blockedElem.querySelector('.play__circle');
                const blockedText = blockedElem.querySelector('.play__text');
                if (blockedCircle && blockedCircle.classList.contains('closed')) {
                    blockedCircle.classList.remove('closed');
                    blockedElem.querySelector('svg').remove();
                    blockedCircle.appendChild(playIconSvg);
                    blockedText.textContent = 'Play video';
                    blockedText.classList.remove('attention');
                    blockedElem.setAttribute('data-disabled', 'false');
                    blockedElem.style.opacity = '1';
                    blockedElem.style.filter = 'none';
                }
            }
        } catch (e) {}
    }
    
    init() {
        if (this.buttons.length > 0) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
            
            this.bindTriggers();
        }
    }
    
}