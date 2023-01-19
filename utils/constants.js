
//массив элементов
export const initialCards = [
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

//дефолтные данные прописанные в html
export const userName = document.querySelector('.profile__name');
export const userJob = document.querySelector('.profile__job');

//блок с элементами
export const elements = '.elements';

//кнопки открытия попапов
export const addButton = document.querySelector('.profile__add');
export const editButton = document.querySelector('.profile__edit');



//попапы
export const popupEditProfile ='.popup-edit'; 
export const popupAddCard = '.popup-add'; 
export const fullImage = '.popup-image';


//формы
export const editProfileForm = document.querySelector(popupEditProfile).querySelector('.form');
export const addCardForm = document.querySelector(popupAddCard).querySelector('.form');

//настройки
export const config = ({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'popup__error_active',
});