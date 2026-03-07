function minInArray(arr){
    min = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i]< min){
            min = arr[i];
        }
    }
    return min;
}
let arr = [1, 2, 3, 5, 4, 9, 0, 10 ];
console.log(minInArray(arr));

