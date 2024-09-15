function* generateprimes(limit) {
    let num = 2;

    while (num <= limit) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            yield num;
        }
        num++;
    }
}

var primeGen = generateprimes(20);

console.log(primeGen.next().value); 
console.log(primeGen.next().value); 
console.log(primeGen.next().value); 
console.log(primeGen.next().value); 
console.log(primeGen.next().value);  
console.log(primeGen.next().value);  
console.log(primeGen.next().value);  
console.log(primeGen.next().value);