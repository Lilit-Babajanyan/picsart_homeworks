function countdown(){

    for(let i = 5; i > 0; i--){
        setTimeout(() => console.log(i), (5-i)*1000);
        }
    setTimeout(() => console.log("go"), 5000)

}
countdown()