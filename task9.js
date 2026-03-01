function SumOfElements(arr){
    let sum =0;
    for(let i=0; i<arr.length; i++){
        if(typeof arr[i]!=="number"){
            return;
        }
        sum+=arr[i];
    }
    return sum;
}

let arr=[1,2,3,"hello",4,5,6];
console.log(SumOfElements(arr));
