
//импорт компонентов 
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';


//импорт переменных const
import {
  initialCards,
  userName,
  userJob,
  elements,
  addButton,
  editButton,
  editProfileForm,
  addCardForm,
  popupEditProfile,
  popupAddCard,
  fullImage,
  config
} from '../utils/constants.js';

//открытие картинки
const elementFullImage = new PopupWithImage(fullImage);


//
const clickCard = (title, image) => {
  elementFullImage.open(title, image);
}

const renderCard = function (data, cardSelector) {
	return new Card({
		data: data,
		handleCardClick: (title, image) => {
			clickCard(title, image);
		},
	}, cardSelector);
}

const CardList = new Section({
	data: initialCards,
	renderer: (item) => {
		const card = renderCard(item, '#element');

		const cardElement = card.generateCard();
		CardList.setItem(cardElement);
	},
}, elements
);

CardList.addItem();

const addCard = new PopupWithForm({
	popupSelector: popupAddCard,
	handleFormSubmit: (value) => {
		const card = renderCard({ title: value.title, image: value.link }, '#element');

		CardList.setItem(card.generateCard());
		addCard.close();
	},
});

addButton.addEventListener('click', () => {
	addCard.open();
	addCardForm.title.value = '';
	addCardForm.link.value = '';
});

const user = new UserInfo(userName, userJob);

const editProfile = new PopupWithForm({
	popupSelector: popupEditProfile,
	handleFormSubmit: (value) => {
		user.setUserInfo(value.name, value.job);
		editProfile.close();
	}
});


editButton.addEventListener('click', () => {
	editProfile.open();
	const userData = user.getUserInfo();
	editProfileForm.name.value = userData.name;
	editProfileForm.job.value = userData.job;
});


const editValidator = new FormValidator(config, editProfileForm);
const addValidator = new FormValidator(config, addCardForm);

editProfile.setEventListeners();
addCard.setEventListeners();
elementFullImage.setEventListeners();


editValidator.enableValidation();
addValidator.enableValidation();

