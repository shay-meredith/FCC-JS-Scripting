function largestOfFour(arr) {
    const arrLength = arr.length;
    for (i = 0; i < arr.length; i++) {
        let arrSort = arr[[i]];
        let arrSortLength = arrSort.length;
        arrSort.sort(function(a, b){return a-b});
        let arrSortLargest = arrSort[arrSortLength - 1];
        arr[i] = arrSortLargest;
    }
    return(arr);
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);