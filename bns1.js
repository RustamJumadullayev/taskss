/*Function yarating u array qabul qilsin va tub sonlarni qaytarsin!> */

function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
function findPrimes(arr) {
    var primes = [];
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primes.push(arr[i]);
        }
    }
    return primes;
}
console.log(findPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 


            
