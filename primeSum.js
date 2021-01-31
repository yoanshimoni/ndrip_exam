function primeSum(num) {
  // wrong input will result in maxCounter == -1
  const { primesArray, checkNumsArray } = getPrimesArray(num); // Helper function returns array of prime numbers and array with values of: 0-prime || 1-not prime

  let sumMaxCounter = 0; // sum of the maxCounter numbers
  let maxCounter = -1; // max consecutive numbers counter initialized negative
  let i = 0;
  while (i < primesArray.length) {
    let sum = 0;
    for (let j = i; j < primesArray.length; j++) {
      sum += primesArray[j];
      // if is greater than our input than break
      if (sum >= num) {
        break;
      }
      if (
        checkNumsArray[sum] === 0 && // check if the sum is a prime number
        j - i > maxCounter // check if the new counter is greater than the current consecutive numbers counter
      ) {
        // if true => assign the new values
        maxCounter = j - i + 1;
        sumMaxCounter = sum;
      }
    }
    i++;
  }
  return { sumMaxCounter, maxCounter };
}

// Helper Function
let getPrimesArray = (number) => {
  const checkNumsArray = new Array(number).fill(0);

  const primesArray = [];
  checkNumsArray[0] = 1;
  checkNumsArray[1] = 1;
  // loop over the numbers and assign value of multiplications of prime numbers to be 1
  for (let i = 2; i < number; i++) {
    if (checkNumsArray[i] === 0) {
      primesArray.push(i);
      // multiplication of prime numbers give a non prime number
      for (let j = i * i; j < number; j += i) {
        checkNumsArray[j] = 1;
      }
    }
  }
  return { primesArray, checkNumsArray };
};

// Examples
console.log(primeSum(100));
console.log(primeSum(1000));
