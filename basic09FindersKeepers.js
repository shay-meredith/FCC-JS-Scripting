function findElement(arr, func) {
    let newArr = arr.filter(func);
    num = newArr[0];
    return num;
  }
  
  findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });

  /*
   *Create a function that looks through an array (first argument) and returns 
   *the first element in the array that passes a truth test (second argument). 
   *If no element passes the test, return undefined.
  */