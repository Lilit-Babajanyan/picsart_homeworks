function IsObject(value){
    if(typeof value === "object"){
        if(value === null || Array.isArray(value) || typeof value === "function" ){
            return false;
        }
        return true;
    }
}

console.log(IsObject({}));           
console.log(IsObject({ a: 1 }));       
console.log(IsObject([]));             
console.log(IsObject(null));          

