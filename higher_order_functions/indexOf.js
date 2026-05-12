Array.prototype.myIndexOf = function (searchElement, fromIndex = 0) {
    const arr = this;

    // handle negative fromIndex
    let start = fromIndex;
    if (start < 0) {
        start = arr.length + start;
        if (start < 0) start = 0;
    }

    for (let i = start; i < arr.length; i++) {
        if (i in arr && arr[i] === searchElement) {
            return i;
        }
    }

    return -1;
};