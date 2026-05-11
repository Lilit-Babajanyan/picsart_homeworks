function numbers(i){
    if(i === 5){return;}
    console.log(i++);

    setTimeout(() => numbers(i), 1000)
}

numbers(0);