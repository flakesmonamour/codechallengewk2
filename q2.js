function generateArray(start, end) {
    if (start < end) {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    } else {
      return Array.from({ length: start - end + 1 }, (_, i) => start - i).reverse();
    }
  }
  console.log(generateArray(4, 7)); 
  console.log(generateArray(-4, 7)); 