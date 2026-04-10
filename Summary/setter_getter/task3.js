class Temperature {
    constructor (){
        this._celsius;
    }

    set temperature (temp) {
        this._celsius = temp; 
    }

    get temperaturee () {
        return (this._celsius * 9/5) + 32;
    }
}

const temp = new Temperature();

temp.temperature = 27;
console.log(temp.temperaturee);
