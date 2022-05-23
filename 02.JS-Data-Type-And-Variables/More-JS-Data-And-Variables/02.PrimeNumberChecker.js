function primeNumberChecker(number){
    let isPrime = true;
    for (let index = 2; index < number; index++) {
        if(number % index === 0)
        {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}

primeNumberChecker(7); // true
primeNumberChecker(8); // false
primeNumberChecker(81); // false