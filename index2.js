function primeSum(num) {
  let sum = 0;
  let primes = [];
  let i = 2;
  while (sum + i < num) {
    if (isPrime(i)) {
      sum += i;
      primes.push(sum);
    }
    i++;
  }

  for (let j = primes.length - 1; j >= 0; j--) {
    if (isPrime(primes[j])) {
      console.log(primes[j]);
      return { sum: primes[j], count: j + 1 };
    }
  }
}

function isPrime(n) {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(primeSum(1000));
