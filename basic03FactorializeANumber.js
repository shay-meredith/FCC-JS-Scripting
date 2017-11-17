function factorialize(num) {
  var j = 1;
  for (var i=1; i<=num; i++) {
    j *= i;
  }
  return j;
}

console.log(factorialize(5));
