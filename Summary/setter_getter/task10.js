class Car {
    constructor() {
        this._speed = 0;
    }

    set speed(value) {
        if (value <= 200) {
            this._speed = value;
        } else {
            console.log("Too fast");
        }
    }

    get speed() {
        return this._speed;
    }
}

const obj = new Car();

obj.speed = 60;

console.log(obj.speed);