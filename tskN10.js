/*Massivdagi true qiymatlar sonini qaytaruvchi funksiya yarating. */
function countTrue(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}
console.log(countTrue([true, false, false, true, false])); 
console.log(countTrue([false, false, false, false]));    



