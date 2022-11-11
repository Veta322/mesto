const popupElement = document.querySelector('.popup');
const popupCloseButtonElement = document.querySelector('.close-button');
const popupOpenButtonElement = document.querySelector('.edit-button');

const openPopup = function() {
  popupElement.classList.add('popup__open');
}

const closePopup = function() {
  popupElement.classList.remove('popup__open');
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup');

let FirstNameInput = document.querySelector('.profile__first-name');
let LastNameInput = document.querySelector('.profile__last-name');

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей  lastNameInput и FirstNameInput из свойства value


    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
