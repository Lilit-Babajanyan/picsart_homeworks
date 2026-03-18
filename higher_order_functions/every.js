let arr = [1,2,3,4];
/*
console.log(arr.every(x=>x<4));
*/

function impl(arr){
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>=4){
            return false;
        }
    }
    return true;
}
console.log(impl(arr));