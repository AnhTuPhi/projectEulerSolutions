function findTheLargestPrimeFactor(number){
  let primeFactor = [];
  for(let factorIterator = 0 ; factorIterator<=number; factorIterator++){
    let isFactor = number % factorIterator == 0;
    let isPrime = true;

    if(isFactor){
      for(let i=2; i<factorIterator;i++){
        if(factorIterator % i ==0){
          isPrime = false;
          continue;
        }
      }
    }
    if(isFactor && isPrime){
      primeFactor.push(factorIterator);
    }
  }
  return primeFactor.pop();
}

findTheLargestPrimeFactor(600851475143);
console.log(findTheLargestPrimeFactor(600851475143));