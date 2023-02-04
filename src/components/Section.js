export default class Section {
  // 
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  //добавление
  //Переименовать чтобы название отображало что делает функция
  addItem(userData) {
    this._renderedItems.forEach(item => 
      this._renderer(item, userData));
  }
//массив с сервера
  setItem(element) {
    this._container.append(element);
  }
//мои карточки
//Посмотреть используется ли где-то
  setMyItem(element) {
    this._container.prepend(element);
  }
//рендер
  setRenderedItems(data) {
    this._renderedItems = data;
  }
};