/*Function yarating u Array qiymati qabul qilsin va arrayning har
 bir elementini cublarini yig'indisini qaytarsin!. */

 function sumOfCubes(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += Math.pow(arr[i], 3);
    }
    return sum;
}
console.log(sumOfCubes([1, 5, 9])); 
console.log(sumOfCubes([3, 4, 5])); 
console.log(sumOfCubes([2]));       
console.log(sumOfCubes([]));         
