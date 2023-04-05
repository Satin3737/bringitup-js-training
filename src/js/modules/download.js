export default class Download {
    constructor(triggers, url) {
        this.buttons = document.querySelectorAll(triggers);
        this.url = url;
    }
    
    downloadItem(url) {
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', url);
        linkElement.setAttribute('download', 'someFile');
        linkElement.style.display = 'none';
        document.body.appendChild(linkElement);
        linkElement.click();
        document.body.removeChild(linkElement);
    }
    
    init() {
        this.buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                this.downloadItem(this.url);
            });
        });
    }
}