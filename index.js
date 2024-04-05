function swapCase(inputstring){
  let swappedString = "";
  for (let i = 0; i < inputstring.length; i++) {
    let char = inputString[i];
    if (char === char.toUpperCase()) {
      swappedString += char.toLowerCase();
    } else if (char === char.toLowerCase()) {
      swappedString += char.toUpperCase();
    }
    return swappedString;
  }
  let inoutstring = "The Quick Brown Fox";
  console.log(swapCase(inputstring));
}
