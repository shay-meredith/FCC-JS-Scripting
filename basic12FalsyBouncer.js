function bouncer(arr) {
    newArr = [];
    for (i = 0; i < arr.length; i++) {
        newArr[i] = Boolean(arr[i]);
        if (newArr[i] == false) {
            arr.splice(i, 1);
            i--;
        }
    }

    console.log(arr);
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);

/*
 *Remove all falsy values from an array.
 *Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
 *Hint: Try converting each value to a Boolean.
*/