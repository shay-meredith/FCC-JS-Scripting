function booWho(bool) {
    if (bool === true || bool === false) {
        bool = true;
    } else {
        bool = false;
    }

    return bool;
  }
  
booWho(null);

/*
 *Check if a value is classified as a boolean primitive. Return true or false.
 *Boolean primitives are true and false.
*/