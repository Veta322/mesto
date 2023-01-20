export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;

    this._container = document.querySelector(containerSelector);
  }

  //добавление
  addItem(element) {
    this._container.prepend(element);
  }
//отрисовка
  renderItems() {
    this._renderedItems.forEach(item => {
      this._renderer(item);
    });
  }


};