

class Popup {
    constructor(popupSelector) {
       this._popup = document.querySelector(popupSelector);
   }

   //открытие попапа
   open() {
    this._popup.classList.add('popup_open');

    document.addEventListener('keydown', this._handleEscClose.bind(this));
    document.addEventListener('click', this._closePopupOverlay.bind(this));
}


//закрытие попапа
close() {
    this._popup.classList.remove('popup_open');
    
    document.removeEventListener('keydown', this._handleEscClose.bind(this));
    document.removeEventListener('click', this._closePopupOverlay.bind(this));
}

//закрытие по esc
_handleEscClose(evt) {
    if (evt.key === 'Escape') {
        this.close();
    }
}

//закрытие по оверлей
_closePopupOverlay(evt) {
    if (evt.target.classList.contains('popup__content')) { 
        this.close();
    }
}


//добавление слушателя к кнопке закрытия 
setEventListeners() {
    const closeButton = this._popup.querySelector('.popup__close');

    closeButton.addEventListener('click', () => {
       this.close();
   });
}

//возвращение попапа
takePopup() {
    return this._popup;
}
};

export default Popup;


