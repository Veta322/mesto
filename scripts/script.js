const popupElementEdit = document.querySelector('.popup-edit');
const formElementEdit = document.querySelector('.form-edit');
const popupCloseEdit = document.querySelector('.close-edit');
const popupOpenEdit = document.querySelector('.profile__edit');
const nameInput = document.querySelector('.form__item_type_name');
const jobInput = document.querySelector('.form__item_type_job');
const nameText = document.querySelector('.profile__name');
const jobText = document.querySelector('.profile__job');
const popupElementAdd = document.querySelector('.popup-add');
const formElementAdd = document.querySelector('.form-add');
const popupOpenAdd = document.querySelector('.profile__add');
const popupCloseAdd = document.querySelector('.close-add');
const elements = document.querySelector('.elements');
const popupImage = document.querySelector('.popup-image');
const popupCloseImage = document.querySelector('.close-image');
const OpenImage = document.querySelector('.open-content__image');
const OpenTitle = document.querySelector('.open-content__title');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];



//открытие-закрытие edit popup
const openPopupEdit = function () {
  popupElementEdit.classList.add('popup_open');
  nameInput.value = nameText.textContent;
  jobInput.value = jobText.textContent;
}

const closePopupEdit = function () {
  popupElementEdit.classList.remove('popup_open');
}

popupOpenEdit.addEventListener('click', openPopupEdit);
popupCloseEdit.addEventListener('click', closePopupEdit);




//присвоение значений edit popup
function formSubmitHandler(evt) {
  evt.preventDefault();
  nameText.textContent = nameInput.value;
  jobText.textContent = jobInput.value;
  closePopupEdit();
}

formElementEdit.addEventListener('submit', formSubmitHandler);





//открытие-закрытие add popup
const openPopupAdd = function () {
  popupElementAdd.classList.add('popup_open');
}

const closePopupAdd = function () {
  popupElementAdd.classList.remove('popup_open');
}

popupOpenAdd.addEventListener('click', openPopupAdd);
popupCloseAdd.addEventListener('click', closePopupAdd);




//копирование элементов template и реализация рабочих кнопок
function addPic(titleValue, picurlValue, isElementFromArray) {

  const ElementTemplate = document.querySelector('#element').content;
  const elementCard = ElementTemplate.querySelector('.element').cloneNode(true);

  elementCard.querySelector('.element__title').textContent = titleValue;
  elementCard.querySelector('.element__image').src = picurlValue;

  elementCard.querySelector('.element__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('element__like-active');
  });

  elementCard.querySelector('.element__delete').addEventListener('click', function () {

    elementCard.remove();

  });

  elementCard.querySelector('.element__image').addEventListener('click', function () {

    openPopupImage();

    OpenImage.src = picurlValue;
    OpenTitle.textContent = titleValue;
  });

  if (isElementFromArray === true) {
    elements.append(elementCard);
  } else {

    elements.prepend(elementCard);
  }
}


//присваивание значений add popup
function formElementAddHandler(evt) {
  evt.preventDefault();

  const titleInput = document.querySelector('.form__item_type_title');
  const urlInput = document.querySelector('.form__item_type_url');

  addPic(titleInput.value, urlInput.value, false);

  titleInput.value = '';
  urlInput.value = '';
  closePopupAdd()
}

formElementAdd.addEventListener('submit', formElementAddHandler);



//добавление карточек из массива
initialCards.forEach(function (item) {
  addPic(item.name, item.link, true);
});





//открытие и закрытие картинки ( обработчик в addPic )
const openPopupImage = function () {
  popupImage.classList.add('popup_open');
}

const closePopupImage = function () {
  popupImage.classList.remove('popup_open');
}

popupCloseImage.addEventListener('click', closePopupImage);

