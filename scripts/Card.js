

class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._title = data.title;
    this._image = data.image;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  //слушатели 
  _setEventListeners(elementImage) {
    this._element.querySelector('.element__like').addEventListener('click', (evt) => {
      this._handleToggleLike(evt);
    });
    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    elementImage.addEventListener('click', () => {
      this._handleCardClick(this._title, this._image);
    });
  }


  _handleToggleLike(evt) {
    evt.target.classList.toggle('element__like-active');
  }


 _handleDeleteCard() {
  this._element.remove();
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
    const elementImage = this._element.querySelector('.element__image');

    this._setEventListeners(elementImage);

    // Добавим данные
    this._element.querySelector('.element__title').textContent = this._title;
    elementImage.src = this._image;
    elementImage.alt = this._title;

    // Вернём элемент наружу
    return this._element;
  }
}

//экспорт 
export default Card;
