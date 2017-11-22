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

findLongestWordLength("The quick brown fox jumped over the lazy dog");
