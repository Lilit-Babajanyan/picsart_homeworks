/* arr.forEach(element=>{
    sum+=element;
    });
console.log(sum);
*/

let arr = [1, 2, 3, 4];
function sumOfElements(value, i, array){
    return value;
}

function impl(arr, sumOfElements){
    sum=0;
    for(let i = 0; i<arr.length; i++){
        sum+=sumOfElements(arr[i], i, arr);
    }
    return sum;
}
console.log(impl(arr, sumOfElements));
