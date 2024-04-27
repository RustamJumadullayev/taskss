/*Function yarating u array qabul qilsin ichida ikkita element bo'ladi 
holos [num1, num2]. function num1* num2 = qiymatini to'paytma belgisidan foydalanmasdan
chiqaradigan algorithm yozing! */



function multiply(arr) {
    var result = 1;
    for (var i = 0; i < arr.length; i++) {
        result *= arr[i];
    }
    return result;
}
console.log(multiply([3, 4]));
console.log(multiply([2, 4])); 




//     2-usul 
function multiply(arr) {
    return arr.reduce(function(acc, val) {
        return acc * val;
    }, 1);
}
console.log(multiply([3, 4])); 
console.log(multiply([2, 4])); 
