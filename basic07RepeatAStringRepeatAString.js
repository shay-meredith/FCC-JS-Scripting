function repeatStringNumTimes(str, num) {
    if (num > 0) {
        let n = str;
        for (i = 0; i < num-1; i++) {
            n = n.concat(str);
        }
        str = n;
    }
    else {
        return false;
    }
    console.log(str);
    return str;
  }
  
  repeatStringNumTimes("abc", 3);

  /* 
  Repeat a given string str (first argument) for num times (second argument). 
  Return an empty string if num is not a positive number.
  */

  //Better solution
  repeatString = (str, num) =>Array.from({length:num},() => str).join('');