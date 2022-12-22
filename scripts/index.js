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
const popupImage = document.querySelector('.popup-image');
const openImage = document.querySelector('.open-content__image');
const openTitle = document.querySelector('.open-content__title');
const closeButtons = document.querySelectorAll('.popup__close');
const elementTemplate = document.querySelector('#element').content;
const titleInput = document.querySelector('.form__item_type_title');
const urlInput = document.querySelector('.form__item_type_url');
const popupContent = document.querySelector('.popup__content');


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
	if (evt.keyCode == 27)  {
		closePopup(document.querySelector('.popup_open'));
	}
}
//закрытие по оверлею
function closePopupOverley(evt){
  if (evt.target === evt.currentTarget){
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

//открытие popupadd
popupOpenAdd.addEventListener('click', () => openPopup(popupElementAdd));



//копирование элементов template и реализация рабочих кнопок
function createCard(titleValue, picurlValue) {
  
  const elementCard = elementTemplate.querySelector('.element').cloneNode(true);

  elementCard.querySelector('.element__title').textContent = titleValue;
  elementCard.querySelector('.element__image').src = picurlValue;
  elementCard.querySelector('.element__image').alt = titleValue;
  
  elementCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-active');
  });

  elementCard.querySelector('.element__delete').addEventListener('click', function () {
    elementCard.remove();
  });

  elementCard.querySelector('.element__image').addEventListener('click', function () {
    openPopup(popupImage);

    openImage.src = picurlValue;
    openTitle.textContent = titleValue;
    openImage.alt = titleValue;
  });

  return elementCard
}

//присваивание значений add popup
function handleElementFormSubmit(evt) {
  evt.preventDefault();
  elements.prepend(createCard(titleInput.value, urlInput.value));
  formElementAdd.reset();
  closePopup(popupElementAdd);
  //setSubmitButtonState(false);
}

formElementAdd.addEventListener('submit', handleElementFormSubmit);

import FormValidator from './FormValidator.js';

const Config = ({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'popup__error_active',
});

const editValidator = new FormValidator (Config, formElementEdit);
const addValidator = new FormValidator (Config, formElementAdd);

editValidator.enableValidation();
addValidator.enableValidation();