// импорт стилей
import './index.css'; 

//импорт компонентов 
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import FormValidator from '../components/FormValidator.js';
import UserInfo from '../components/UserInfo.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithSubmit from '../components/PopupWithSubmit';

//импорт переменных const
import {
  userName,
  userJob,
  profileAvatar,
  elements,
  addButton,
  editButton,
  avatarButton,
  editProfileForm,
  addCardForm,
  avatarEditForm,
  popupEditProfile,
  popupAddCard,
  popupAvatarEdit,
  popupSubmit,
  fullImage,
  config
} from '../utils/constants.js';

//импорт апи
import {
	api
} from '../components/Api.js';

//открытие картинки
const elementFullImage = new PopupWithImage(fullImage);

//создание карточки
const createCard = function (data, userData, cardSelector) {
	const card = new Card({
		data: data,
		userData: userData,
		cardClick: (name, link) => {
			elementFullImage.open(name, link);
		},
		likeClick: (cardId) => {
			if (card.isLikeToggle()) {
				api.removelikeCard(cardId)
					.then((data) => {
						card.updateLikesNumber(data)
					})
					.catch((error) => {
						console.log(error)
					})
			} else {
				api.likeCard(cardId)
					.then((data) => {
						card.updateLikesNumber(data)
					})
					.catch((error) => {
						console.log(error)
					})
			}
		},
		deleteIconClick: (element, cardId) => {
			delCard.open({ element, cardId })
		},
	}, cardSelector);

	return card;
}

//добавление карточки на страницу
const cardList = new Section({
	renderer: (item, userData) => {
		const card = createCard(item, userData, '#element');

		const cardElement = card.generateCard();
		cardList.serverItem(cardElement);
	},
}, elements
);


//слздание промиса
const promises = [api.getInitialCards(), api.getPersonInfo()]

Promise.all(promises)
	.then(([resCard, resUser]) => {
		user.setUserInfo(resUser._id, resUser.name, resUser.about, resUser.avatar)
		cardList.setRenderedItems(resCard);
		cardList.addItem(resUser)


		//редактирование инф-ции
		editButton.addEventListener('click', () => {
			
			editValidator.enablePopupSubmitButton();
			editProfile.open();
			const userData = user.getUserInfo();
			editProfileForm.name.value = userData.name;
			editProfileForm.job.value = userData.about;
		});
		//обновление аватара
		avatarButton.addEventListener('click', () => {
			avatarValidator.enablePopupSubmitButton();
			avatarProfile.open();
			avatarEditForm.link.value = user.getUserInfo().avatar;
		});

		//добавление карточки
		addButton.addEventListener('click', () => {
			addValidator.disabledPopupSubmitButton();
			addCard.open();
		});
	})
	.catch((error) => {
		console.log(error)
	})

	//ux кнопок
function renderLoading(evt, isLoading) {
	
	if (isLoading) {
		evt.submitter.textContent = 'Сохранение...';
	}
	else {
		evt.submitter.textContent = 'Сохранить';
	}
}


//добавление карточки пользователем
const addCard = new PopupWithForm({
	popupSelector: popupAddCard,
	handleFormSubmit: (evt, value) => {
		renderLoading(evt, true);
		api.addNewCard({
			name: value.title,
			link: value.link
		})
			.then(data => {
				const card = createCard(data, user.getUserInfo(), '#element');
				cardList.setItem(card.generateCard());
				addCard.close();
				
			})
			.catch((error) => {
				console.log(error)
			})

			.finally(() => {
				renderLoading(evt, false)
	});
	
	},
	
});

//удаление карточки
const delCard = new PopupWithSubmit({
	popupSelector: popupSubmit,
	handleFormSubmit: ( {element, cardId} ) => {
		api.delCard(cardId)
			.then(() => {
				element.remove();
				delCard.close()
			})
			.catch((error) => {
				console.log(error)
			})
	}
});

//обновление аватара
const avatarProfile = new PopupWithForm({
	popupSelector: popupAvatarEdit,
	handleFormSubmit: (evt, value) => {
		renderLoading(evt, true)
		api.editAvatar( {avatar: value.link} )
			.then(data => {
				user.setUserInfo(data._id, data.name, data.about, data.avatar);
				avatarProfile.close();
			})
			.catch((error) => {
				console.log(error)
			})
			.finally(() => {
				renderLoading(evt, false)
	});
	}
});


const user = new UserInfo({
	userName: userName,
	userJob: userJob,
	userAvatar: profileAvatar
});

//обновление информации
const editProfile = new PopupWithForm({
	popupSelector: popupEditProfile,
	handleFormSubmit: (evt, value) => {
		renderLoading(evt, true);
		api.sendUserInfo({ name: value.name, about: value.job })
			.then(data => {
				user.setUserInfo(data._id, data.name, data.about, data.avatar);
				editProfile.close();
			})
			.catch((error) => {
				console.log(error)
			})

			.finally(() => {
				renderLoading(evt, false)
	});
	}
});
//валидация
const editValidator = new FormValidator(config, editProfileForm);
const addValidator = new FormValidator(config, addCardForm);
const avatarValidator = new FormValidator(config, avatarEditForm);
//вкл функций
editProfile.setEventListeners();
addCard.setEventListeners();
elementFullImage.setEventListeners();
avatarProfile.setEventListeners();
delCard.setEventListeners();

editValidator.enableValidation();
addValidator.enableValidation();
avatarValidator.enableValidation(); 
