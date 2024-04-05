function generateArray(start,end){
  if (typeof start !== 'number' || typeof end !== 'number') {
    return "Both inputs must be numbers.";
  }
  if (start > end) {
    return "Start number must be less than end number.";
  }
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}
let startNum = 4;
let endNum = 7;
console.log(generateArray(startNum, endNum));

function generateArray(start, end) {
  if (typeof start !== 'number' || typeof end !== 'number') {
    return "Both inputs must be numbers.";
  }
  
  let result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
}

let startNumber = -4;
let endNumber = 7;
console.log(generateArray(startNum, endNum));




