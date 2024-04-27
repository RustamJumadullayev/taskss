/*Function yarating u array qabul qilsin va yana bitta function qaytarsin
(recursion bu) ichki function number qabul qilsin va birinchi functionda kiritilgan
qiymatlarni har birini shu songa ko'paytirib array shaklida qaytarsin */



function multiply(arr) {
    return function(number) {
        if (arr.length === 0) {
            return [];
        }
        var firstElement = arr[0] * number;
        var restArray = multiply(arr.slice(1))(number);
        return [firstElement].concat(restArray);
    }
}
console.log(multiply([1, 2, 3])(2)); 
console.log(multiply([4, 6, 5])(10));
console.log(multiply([1, 2, 3])(0));



