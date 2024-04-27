/*Function yarating u uzunligi 10ga teng bo'lgan array qabul qilsin
 (0,9 oralig'ida) va telefon number formatida qaytarsin! */


 function formatPhoneNumber(arr) {
    if (arr.length !== 10) {
        return "Invalid array length";
    }
    var areaCode = arr.slice(0, 3).join('');
    var firstPart = arr.slice(3, 6).join('');
    var secondPart = arr.slice(6).join('');
    
    return "(" + areaCode + ") " + firstPart + "-" + secondPart;
}

console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); 
console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); 
