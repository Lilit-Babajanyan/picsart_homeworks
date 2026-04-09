class Employee{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const obj = new Employee("Lilit", "Babajanyan");

console.log(obj.fullName);