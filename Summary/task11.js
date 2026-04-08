// const obj = {
//  value: 100,
//  get() {
//    const inner = () => {
//     return this.value;
//    }
//     return inner();
//  }
// };

// console.log(obj.get());


const obj = {
 value: 100,
 get() {
   function inner() {
     return this.value;
   }
   return inner.call(obj);
 }
};
console.log(obj.get());
