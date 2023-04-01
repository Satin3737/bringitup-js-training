export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        this.oldOfficer = document.querySelector(oldOfficer);
        this.newOfficer = document.querySelector(newOfficer);
        this.oldItems = this.oldOfficer.querySelectorAll(items);
        this.newItems = this.newOfficer.querySelectorAll(items);
        this.oldCounter = 0;
        this.newCounter = 0;
    }
    
    bindTriggers(officer, items, counter) {
        officer.querySelector('.plus').addEventListener('click', () => {
            if (counter !== items.length - 2) {
                this.showItem(items, counter);
                counter++;
            } else {
                this.showItem(items, counter);
                items[items.length - 1].remove();
            }
        });
    }
    
    showItem(items, counter) {
        items[counter].style.display = 'flex';
        items[counter].classList.add('animated', 'fadeIn');
    }
    
    hideItems(items) {
        items.forEach((item, i, arr) => {
            if (i !== arr.length -1) {
                item.style.display = 'none';
            }
        });
    }
    
    initOfficer(officer, items, counter) {
        this.hideItems(items);
        this.bindTriggers(officer, items, counter);
    }
    
    init() {
        this.initOfficer(this.oldOfficer, this.oldItems, this.oldCounter);
        this.initOfficer(this.newOfficer, this.newItems, this.newCounter);
    }
}