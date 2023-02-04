export default class Section {
  // 
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  //перебор массива карточек
  
  addItem(userData) {
    this._renderedItems.forEach(item => 
      this._renderer(item, userData));
  }
//добавление
  setItem(element) {
    this._container.prepend(element);
  }

  serverItem(element) {
    this._container.append(element);
  }

//рендер
  setRenderedItems(data) {
    this._renderedItems = data;
  }
};