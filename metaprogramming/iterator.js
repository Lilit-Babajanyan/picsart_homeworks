let  myRange = {
    from : 1,
    to : 5,

    [Symbol.iterator](){

        let start = this.from;
        let end = this.to;

        return {
            next() {
                if(end >= start) {
                    return {value: end--, done : false};
                }
                return {value : undefined, done : true};
        }
    };
}
};

let iterator = myRange[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())