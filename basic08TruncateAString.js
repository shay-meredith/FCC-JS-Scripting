function truncateString(str, num) {
    if (str.length > num) {
        console.log(str.length);
        console.log(num);
        slice = str.slice(num, str.length);
        replace = str.replace(slice, '...');
        str = replace;
        console.log(str);
    } else {
        return str;
    }
    return str;
  }
  
  truncateString("A-tisket a-tasket A green and yellow basket", 8);


/**
  *Truncate a string (first argument) if it is longer than the given 
  *maximum string length (second argument). Return the truncated string 
  *with a ... ending.
**/