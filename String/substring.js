function myStartsWith(str, sub) {
  if (
    typeof str !== "string" ||
    typeof sub !== "string" ||
    sub.length > str.length
  ) {
    return false;
  }
  /*for( let i in sub){
        if(sub[i]!==str[i]){
            return false;
        }
        } */

  for (let i = 0; i < sub.length; i++) {
    if (sub[i] !== str[i]) {
      return false;
    }
  }
  return true;
}
console.log(myStartsWith("hello", "hz"));
