function mutation(arr) {
    arrOne = arr[0].split('');
    arrTwo = arr[1].split('');
    let x = 0;
    for (i = 0; i < arrTwo.length; i++) {
        for (j = 0; j < arrOne.length; j++) {
            if (arrTwo[i].toLowerCase() === arrOne[j].toLowerCase()) {
                x++;
                break;
            }
        }
    }
    if (x == arrTwo.length) {
        arr = true;
    } else {arr = false};
    console.log(arr);
    return arr;
  }
  
mutation(["Mary", "Army"]);

/*
 *Return true if the string in the first element of the array contains all of the letters 
 *of the string in the second element of the array.
 *For example, ["hello", "Hello"], should return true because all of the letters in the second 
 *string are present in the first, ignoring case.
 *The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".
 *Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/