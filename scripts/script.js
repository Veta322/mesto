const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.close-button');
const popupOpenButtonElement = document.querySelector('.edit-button');
const nameInput = document.querySelector('.form__item_name');
const jobInput = document.querySelector('.form__item_job');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__job');

const openPopup = function () {
  popupElement.classList.add('popup__open');
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}

const closePopup = function () {
  popupElement.classList.remove('popup__open');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopup();
}

popupElement.addEventListener('submit', formSubmitHandler);
