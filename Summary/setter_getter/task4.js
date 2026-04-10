class Counter {
    constructor () {
        this._count = 0;
    }

    increment (){
        this._count++;
    }

    get count () {
        return this._count;
    }
}

const counter = new Counter();

counter.increment();
counter.increment();
counter.increment();

console.log(counter.count); 