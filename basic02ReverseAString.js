function reverseString(str) {
  var array = [];
  var j = 0;
    for (i=str.length-1; i>=0; i--) {
      array[j] = str[i];
      j++;
    }
  return array.join("");
}

reverseString("hello");
