function openPopup(popup) {
  popup.classList.add('popup_open');
  document.addEventListener('keydown', closePopupEsc);
  popup.querySelector('.popup__content').addEventListener('click', closePopupOverley);
}
//общая функция закрытия
function closePopup(popup) {
  popup.classList.remove('popup_open');
  document.removeEventListener('keydown', closePopupEsc);
  popup.querySelector('.popup__content').removeEventListener('click', closePopupOverley);
}
//закрытие по esc 
function closePopupEsc(evt) {
  if (evt.keyCode == 27) {
    closePopup(document.querySelector('.popup_open'));
  }
}
//закрытие по оверлею
function closePopupOverley(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(document.querySelector('.popup_open'));
  }
}

class Card {
  constructor(data, templateSelector) {
    this._title = data.title;
    this._image = data.image;
    this._templateSelector = templateSelector;
  }

   //слушатели 
  _setEventListeners() {
    const popupImage = document.querySelector('.popup-image');
    const openImage = document.querySelector('.open-content__image');
    const openTitle = document.querySelector('.open-content__title');
    this._element.querySelector('.element__like').addEventListener('click', () => {
      this._likeClickActive();
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._element.remove();
    });

    this._element.querySelector('.element__image').addEventListener('click', () => {
      openPopup(popupImage);

      openImage.src = this._image;
      openTitle.textContent = this._title;
      openImage.alt = this._title;
    });

  }
    //активация лайка
  _likeClickActive() {
    this._element.querySelector('.element__like').classList.toggle('element__like-active')
  }

  

//  клонируем элемент
  _getTemplate() {
    
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }

  generateCard() {
   //разметка в приватном поле
    this._element = this._getTemplate();
    this._setEventListeners();

    // Добавим данные
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').src = this._image;

    // Вернём элемент наружу
    return this._element;
  }
}


//экспорт 
export default Card;
