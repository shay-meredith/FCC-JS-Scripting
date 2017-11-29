function largestOfFour(arr) {
    let longestNum = 0;
    let newArr = []
    for (let subArr of arr) {
        for (let num of subArr) {
            let longest = subArr[0];
            if (num >= longest) {
                longest = num;
            }
            if (longest > longestNum) {
                longestNum = longest;
            }
        }
        console.log(longestNum);
        newArr.push(longestNum);
    }
    console.log(newArr);
    /*
    arr.splice(0,4);
    console.log(arr);
    arr.push(newArr);
    console.log(arr);
    */
    return newArr;
}
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  
  
  
  /* 
  function findLongestWordLength(words) {
    let wordsArray = words.split(' ');
    let longestWord = wordsArray[0].length;
  
    for (const word of wordsArray) {
      if (word.length > longestWord) {
        longestWord = word.length;
      }
    }
    return longestWord;
  }
  
  Start with 4 arrays
  For array[0]
      longest = num[0]
      if num > longest
        longest = num
  
  Return an array consisting of the largest number from each provided sub-array. 
  For simplicity, the provided array will contain exactly 4 sub-arrays.
  Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
  */
