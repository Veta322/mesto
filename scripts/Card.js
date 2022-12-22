const initialCards = [
  {
    title: 'Архыз',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    title: 'Челябинская область',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    title: 'Иваново',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    title: 'Камчатка',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    title: 'Холмогорский район',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    title: 'Байкал',
    image: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


class Card {
  constructor(data,templateSelector) {
      this._title = data.title;
      this._image = data.image; 
      this._templateSelector = templateSelector;
    }
  
    _setEventListeners() {
      this._element.querySelector('.element__like').addEventListener('click', () => {
        this._likeClickActive();
      });
      this._element.querySelector('.element__delete').addEventListener('click', () =>  {
        this._element.remove();
      });
    }

    _likeClickActive() {
      this._element.querySelector('.element__like').classList.toggle('element__like-active')
  }

  
  
  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
      const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
      
    // вернём DOM-элемент карточки
      return cardElement;
  }

  generateCard()  {
    // Запишем разметку в приватное поле _element. 
    // Так у других элементов появится доступ к ней.
    this._element = this._getTemplate();
    this._setEventListeners();
   
    // Добавим данные
    this._element.querySelector('.element__title').textContent = this._title;
    this._element.querySelector('.element__image').src = this._image;
    this._element.querySelector('.element__image').alt = this._title;
    
    
    
  

  
    // Вернём элемент наружу
    return this._element;
  } 
}

initialCards.forEach((item) => {
  // Создадим экземпляр карточки
  const card = new Card(item, '.elements-template_type_default');
  // Создаём карточку и возвращаем наружу
  const cardElement = card.generateCard();

  // Добавляем в DOM
  
  elements.append(cardElement);
}); 


export default Card;

