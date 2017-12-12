
function titleCase(str) {
    strArr = str.split(' ');
    strArrLength = strArr.length;
    // Loop through each word
    let newArr = [];
    for (i = 0; i < strArrLength; i++) {
        newArr = strArr[i].split('');
        newArrUpper = newArr[0].toUpperCase();
        newArr[0] = newArrUpper;
        strArr[i] = newArr.join('');
    }
    str = strArr.join(' ');
    return str;
}
titleCase("i'm a little tea pot");

/*
 *Return the provided string with the first letter of each word capitalized. 
 *Make sure the rest of the word is in lower case.
 *For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/