class FormValidator {
	constructor(setting, formElement) {
    this._setting = setting;
		this._formElement = formElement;
	}


//функция показа ошибки
_showInputError(inputElement) {
  this._errorElement = this._formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.add(this._setting.inputErrorClass);
  this._errorElement.textContent = inputElement.validationMessage;
  this._errorElement.classList.add(this._setting.errorClass);
}

//функция скрытия ошибки
_hideInputError(inputElement)  {
  this._errorElement = this._formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.remove(this._setting.inputErrorClass);
  this._errorElement.classList.remove(this._setting.errorClass);
  this._errorElement.textContent = '';
}

//проверка интупа на валидность
_checkInputValidity (inputElement) {
  if (!inputElement.validity.valid) {
  	this._showInputError(inputElement);
		} else {
			this._hideInputError(inputElement);
		}
	}

//отключение кнопки
_disabledPopupSubmitButton () {
  this._buttonElement.classList.add(this._setting.inactiveButtonClass);
  this._buttonElement.disabled = true;
}
//включение кнопки
_enablePopupSubmitButton (){ 
  this._buttonElement.classList.remove(this._setting.inactiveButtonClass);
  this._buttonElement.disabled = false;
} 

 
//применение вкл и выкл кнопки
_toggleButtonState () {
  if (this._hasInvalidInput()) {
    this._disabledPopupSubmitButton ();
  } else {
    this._enablePopupSubmitButton ();
  }
}

//возвращаем элементы ввода 
_hasInvalidInput() {
  return this._inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//создаём массив и обходим все элементы формы 
_setEventListeners() {
  this._inputList = Array.from(this._formElement.querySelectorAll(this._setting.inputSelector));
  this._buttonElement = this._formElement.querySelector(this._setting.submitButtonSelector);

  this._toggleButtonState();

  this._inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
}

//создаём массив и обходим все формы

enableValidation = () => {

  this._formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    this._disabledPopupSubmitButton ();
  });

  this._setEventListeners();
};

};
//экспорт
export default FormValidator;
