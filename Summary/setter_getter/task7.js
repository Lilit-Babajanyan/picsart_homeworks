class Rectangle {
    constructor() {
        this._width = 0;
        this._height = 0;
  }

    set width(value) {
        this._width = value;
  }

    set height(value) {
        this._height = value;
  }

    get area() {
        return this._width * this._height;
  }
}

const  rectangle = new Rectangle();

rectangle.width = 5;
rectangle.height = 6;

console.log(rectangle.area);