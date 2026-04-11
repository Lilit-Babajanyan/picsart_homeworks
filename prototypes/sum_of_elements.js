Array.prototype.mySum = function (){
        let sum = 0;

        if (this.length === 0) {
            return 0;
        }

        for(let i of this) {
            if(typeof i !== "number" || Number.isNaN(i)){
                throw new Error ("Error");
            }
            sum += i;
        }
        return sum;
    };

console.log([1, 2, 3].mySum()); 
console.log([10, -5, 4].mySum()); 
console.log([].mySum()); 

console.log([1, "2", 3].mySum()); 
console.log([1, NaN].mySum()); 
console.log([true, 2].mySum()); 



