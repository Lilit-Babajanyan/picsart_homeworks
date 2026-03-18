let arr = [8,9,10];
/*
console.log(arr.some(x=> x<3));
*/
function impl(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]<3){
            return true;
    }
    }
    return false;
}
console.log(impl(arr))