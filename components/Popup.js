

class Popup {
    constructor(popupSelector) {
       this._popup = document.querySelector(popupSelector);
   }

   open() {
    this._popup.classList.add('popup_open');

    document.addEventListener('keydown', this._handleEscClose.bind(this));
    document.addEventListener('click', this._closePopupMousedown.bind(this));
}

close() {
    this._popup.classList.remove('popup_open');
    
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    document.removeEventListener('click', this._closePopupMousedown.bind(this));
}

_handleEscClose(evt) {
    if (evt.key === 'Escape') {
        this.close();
    }
}

_closePopupMousedown(evt) {
    if (evt.target.classList.contains('popup_open')) { 
        this.close();
    }
}

setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close');

    closeButton.addEventListener('click', () => {
       this.close();
   });
}

takePopup() {
    return this._popup;
}
};

export default Popup;


