const popupElementEdit = document.querySelector('.popup-edit');
const formElementEdit = document.querySelector('.form-edit');
const popupOpenEdit = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__job');
const popupElementAdd = document.querySelector('.popup-add');
const popupOpenAdd = document.querySelector('.profile__add');
const formElementAdd = document.querySelector('.form-add');
const elements = document.querySelector('.elements');
const closeButtons = document.querySelectorAll('.popup__close');
const titleInput = document.querySelector('.form__item_type_title');
const urlInput = document.querySelector('.form__item_type_url');

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


//общая функция открытия
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

//открытие edit popup
const openPopupEdit = function () {
  openPopup(popupElementEdit);
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}
popupOpenEdit.addEventListener('click', openPopupEdit);

//универсальный обработчик закрытия
closeButtons.forEach((button) => {
  const popupClose = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popupClose));
});

//присвоение значений edit popup
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup(popupElementEdit);
}

formElementEdit.addEventListener('submit', handleProfileFormSubmit);







//открытие add-form
popupOpenAdd.addEventListener('click', function () {
  titleInput.value = '';
  urlInput.value = '';
  openPopup(popupElementAdd);
});

//присвоение значений
function handleElementFormSubmit(evt) {
  evt.preventDefault();

  createCard({ title: titleInput.value, image: urlInput.value })
  closePopup(popupElementAdd);
}

formElementAdd.addEventListener('submit', handleElementFormSubmit);


//импорт класса 
import Card from './Card.js';
//создание разметки карточки 
const createCard = (item) => {
  const card = new Card(item, '#element');
  const cardElement = card.generateCard();
  elements.prepend(cardElement);
}
//присвоение значений из массива
initialCards.forEach((item) => {
  createCard(item);
});

//импорт класса
import FormValidator from './FormValidator.js';
//настройки
const Config = ({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'popup__error_active',
});
//формы через класс
const editValidator = new FormValidator(Config, formElementEdit);
const addValidator = new FormValidator(Config, formElementAdd);

editValidator.enableValidation();
addValidator.enableValidation();