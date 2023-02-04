

//дефолтные данные прописанные в html
export const userName = document.querySelector('.profile__name');
export const userJob = document.querySelector('.profile__job');
export const profileAvatar = document.querySelector('.profile__avatar-pic');

//блок с элементами
export const elements = '.elements';

//кнопки открытия попапов
export const addButton = document.querySelector('.profile__add');
export const editButton = document.querySelector('.profile__edit');
export const avatarButton = document.querySelector('.profile__avatar');


//попапы
export const popupEditProfile ='.popup-edit'; 
export const popupAddCard = '.popup-add'; 
export const fullImage = '.popup-image';
export const popupAvatarEdit = '.popup-avatar';
export const popupSubmit = '.popup-delete';


//формы
export const editProfileForm = document.querySelector(popupEditProfile).querySelector('.form');
export const addCardForm = document.querySelector(popupAddCard).querySelector('.form');
export const avatarEditForm = document.querySelector(popupAvatarEdit).querySelector('.form');

//настройки
export const config = ({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'popup__error_active',
});

//api
export const url = "https://mesto.nomoreparties.co/v1/cohort-59";
export const token = '131e7fdb-149f-4853-99c1-5f7c0b1924bf';