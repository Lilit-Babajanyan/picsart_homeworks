function contains(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return true; 
        }
    }
    return false; 
}
let arr=[1,2,3,4,5];
let value=4;
console.log(contains(arr, value));