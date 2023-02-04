class Card {
	constructor({ data, userData, cardClick, likeClick, deleteIconClick }, cardSelector) {
		this._cardSelector = cardSelector;
		this._name = data.name;
		this._cardClick = cardClick;
		this._link = data.link;
		this._data = data;
		this._likeClick = likeClick;
		this._deleteIconClick = deleteIconClick;
		this._userData = userData
	}
//клонирование
	_getTemplate() {
		const cardElement = document
			.querySelector(this._cardSelector)
			.content
			.querySelector('.element')
			.cloneNode(true);

		return cardElement;
	}
//создание
	generateCard() {
		this._element = this._getTemplate();
		this._setEventListeners();
		this._setDeleteIcon();
		this.updateLikesNumber(this._data);
		this._elementImage.src = this._link;
		this._elementImage.alt = this._name;
		this._element.querySelector('.element__title').textContent = this._name;

		return this._element;
	}
//лайки
// переименовать
	isLikeToggle() {
		// разобраться че такое some
		if (this._data.likes.some((like) => like._id === this._userData._id))
			return true
		else return false
	}
//обновление лайка
	updateLikesNumber(data) {
		this._data = data;
		this._likeCounter.textContent = this._data.likes.length;
		if (this.isLikeToggle()) {
			this._cardLikeButton.classList.add('element__like-active')
		} else {
			this._cardLikeButton.classList.remove('element__like-active')
		}
	}
//добавление иконки удалить
	_setDeleteIcon() {
		if (this._userData._id !== this._data.owner._id)
			this._element.querySelector('.element__delete').remove()
	}
//слушатели
	_setEventListeners() {
		this._cardDeleteButton = this._element.querySelector('.element__delete');
		this._cardLikeButton = this._element.querySelector('.element__like');
		this._elementImage = this._element.querySelector('.element__image');
		this._likeCounter = this._element.querySelector('.element__counter');

		this._cardLikeButton.addEventListener('click', () => {
			this._likeClick(this._data._id)
		});

		this._cardDeleteButton.addEventListener('click', () => {
			this._deleteIconClick(this._element, this._data._id)
		});

		this._elementImage.addEventListener('click', () => {
			this._cardClick(this._name, this._link)
		});
	}
}

export default Card;