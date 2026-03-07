function average(arr){
    let mean=0;
    let sum =0;
    for(let i = 0; i<arr.length; i++){
        if(typeof arr[i]!== "number"){
            continue;
        }
        sum+=arr[i];
        mean=Math.floor(sum/arr.length);
    }
    return mean;
}
let arr=[1,2,3];
console.log(average(arr));

