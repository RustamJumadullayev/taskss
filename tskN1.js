/*function yarating u number qabul qilsin va uni ikki bo'lakga bo'lsin shu bo'laklarni 
bir biriga qo'shganda yi'g'indi berilgan number bilan bir hil bo'lsin. Agarda
raqamlar juftva toqga ajrasa kattasi o'ng tomonda kelsin */

function numberSplit(num) {
    num = Math.abs(num);
    var half = Math.floor(num / 2);
    var firstHalf = half;
    var secondHalf = half;
    if (num % 2 === 1) {
        secondHalf++;
    }
    if (num < 0) {
        firstHalf *= -1;
        secondHalf *= -1;
    }
    
    return [firstHalf, secondHalf];
}
console.log(numberSplit(4));  
console.log(numberSplit(10)); 
console.log(numberSplit(11)); 
console.log(numberSplit(-9))
