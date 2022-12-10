//функция показа ошибки
const showInputError = (formElement, inputElement, errorMessage, obj) => {
  const errorElement = formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.add(obj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(obj.errorClass);
};
//функция скрытия ошибки
const hideInputError = (formElement, inputElement, obj) => {
  const errorElement = formElement.querySelector(`.popup__error-${inputElement.id}`);
  inputElement.classList.remove(obj.inputErrorClass);
  errorElement.classList.remove(obj.inputErrorClass);
  errorElement.textContent = '';
};
//проверка интупа на валидность
const checkInputValidity = (formElement, inputElement, obj) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, obj);
  } else {
    hideInputError(formElement, inputElement, obj);
  }
};
//отключение кнопки
const disabledPopupSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.add(inactiveButtonClass);
  buttonElement.disabled = true;
};
//включение кнопки
const enablePopupSubmitButton = (buttonElement, inactiveButtonClass) => {
  buttonElement.classList.remove(inactiveButtonClass);
  buttonElement.disabled = false;
};
 
//применение вкл и выкл кнопки
const toggleButtonState = (inputList, buttonElement, obj) => {
  if (hasInvalidInput(inputList)) {
    disabledPopupSubmitButton(buttonElement, obj.inactiveButtonClass);
  } else {
    enablePopupSubmitButton(buttonElement, obj.inactiveButtonClass);
  }
};

//возвращаем элементы ввода 
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//создаём массив и обходим все элементы формы 
const setEventListeners = (formElement, obj) => {
  const inputList = Array.from(formElement.querySelectorAll(obj.inputSelector));
  const buttonElement = formElement.querySelector(obj.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, obj);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement, obj);
      toggleButtonState(inputList, buttonElement, obj);
    });
  });
};

//создаём массив и обходим все формы
const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, obj);
  });

};

enableValidation({
  formSelector: '.form',
  inputSelector: '.form__item',
  submitButtonSelector: '.popup__save',
  inactiveButtonClass: 'popup__disabled',
  inputErrorClass: 'form__item_error',
  errorClass: 'popup__error_active',
});





/*
function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    saveButton.removeAttribute('disabled');
    saveButton.classList.remove('popup__disabled');

  } else {
    saveButton.setAttribute('disabled', true);
    saveButton.classList.add('popup__disabled');
  }
}



formElementEdit.addEventListener('input', function (evt) {
  const isValid = nameInput.value.length > 2 && nameInput.value.length < 40  &&  jobInput.value.length > 2 && nameInput.value.length < 200;
  setSubmitButtonState(isValid);
});


formElementAdd.addEventListener('input', function (evt) {
  const isValid = titleInput.value.length > 2 && titleInput.value.length < 30; 
  setSubmitButtonState(isValid);
});*/










































