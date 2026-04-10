class Account {
  constructor() {
    this._password = "";
  }
  set password(pswd){
    if (pswd.length > 6) {
      this._password = pswd;
    } else {
      console.log("Password too short");
    }
  }

    get password() {
    return this._password;
  }
}


const acc = new Account();

acc.password = "123";        
acc.password = "12345678900";   

console.log(acc.password);  

