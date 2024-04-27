/*Function yarating u Array ([]) qabul qilsin. Birinchi uchragan
 toq sonni qaytaradigan algorithm yozing! */

 function isPrime(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {  /// sqrt ildizi xisobledi
        if (num % i === 0) return false;
    }
    return true;
}

function findPrimeNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) return arr[i];
    }
    return null; 
}
console.log(findPrimeNumber([1, 4, 9, 12, 3]));   
console.log(findPrimeNumber([123, 42, 93, 21, 11]));



//    2-usuli

function findPrimeNumber(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0 && isPrime(arr[i])) {
            return arr[i];
        }
    }
    return null;
}
console.log(findPrimeNumber([1, 4, 9, 12, 3]));    
console.log(findPrimeNumber([123, 42, 93, 21, 11]))

