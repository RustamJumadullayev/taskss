/*Funtion yarating u array qabul qilsin array ichida so'zlar berilgan.
 So'zlardan faqat kichik harfli unlilarni qaytaradigan algorithm tuzing! */

 function returnVowel(arr) {
    var result = [];
    var vowels = "aeiouAEIOU"; 
    
    for (var i = 0; i < arr.length; i++) {
        var word = arr[i];
        var newWord = "";
        for (var j = 0; j < word.length; j++) {
            var char = word[j];
            if (vowels.includes(char) && char === char.toLowerCase()) {
                newWord += char;
            }
        }   
        result.push(newWord);
    }
    return result;
}
console.log(returnVowel(["Assalomu alaykum", "salom", "Najot ta'lim"])); 
console.log(returnVowel(["Toshkent"])); 
