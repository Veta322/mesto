import Popup from './Popup.js'

class PopupWithSubmit extends Popup {
  constructor ( {popupSelector, handleFormSubmit} ) {
    super(popupSelector);
    this._popup = super.takePopup();
    this._handleFormSubmit = handleFormSubmit;
  }
//слушатели
  setEventListeners() {
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._delElement);
    })

    super.setEventListeners();
  }

  open (data) {
    super.open()
    this._delElement = data
  }

}

export default PopupWithSubmit;