class Email {
    constructor() {
        this._email = "";
  }

    set email(value) {
        if (value.includes("@")) {
            this._email = value;
        } else {
            console.log("Invalid email");
        }
    }

    get email() {
        return this._email;
    }
}

const emailObj = new Email();

emailObj.email = "babajanyan20@mail.com";

console.log(emailObj.email);

