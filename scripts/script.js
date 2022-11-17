const popupElement = document.querySelector('.popup');
const formElement = document.querySelector('.form');
const popupCloseButtonElement = document.querySelector('.popup__close');
const popupOpenButtonElement = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__job');

const openPopup = function () {
  popupElement.classList.add('popup_open');
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup_open');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup();
}

formElement.addEventListener('submit', formSubmitHandler);
