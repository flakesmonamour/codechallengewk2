function isPrime(num){
  if(num <=1) return false;
  for(let i =2; i <=Math.sqrt(num); i++){
    if(num % i === 0){
      return false;
    }
  }
  return true;
}
function filterPrimeNumbers(arr){
  return arr.filter(num => isPrime(num));
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10,];
  console.log(filterPrimeNumbers(numbers));
