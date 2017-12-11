function confirmEnding(str, target) {
    const strLength = str.length;
    const targetLength = target.length;
    const lastString = str.slice(strLength - targetLength, strLength);
    if (lastString === target) {
        str = true;
    } else { 
        str = false;
    }
    return str;
  }
  
  confirmEnding("Congratulation", "on");

  /*
  Check if a string (first argument, str) ends with the given target string (second argument, target).
  
  This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for 
  the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
  */