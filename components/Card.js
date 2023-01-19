

class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._cardSelector = cardSelector;
    this._title = data.title;
    this._handleCardClick = handleCardClick;
    this._image = data.image;
  }

  //слушатели 
  _setEventListeners() {

    const elementImage = this._element.querySelector('.element__image');

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
      .querySelector(this._cardSelector)
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

    this._setEventListeners();

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
