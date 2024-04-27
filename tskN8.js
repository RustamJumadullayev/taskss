/*To'liq so'z tugaguncha ketma-ket harflarni qo'shib, so'zni qabul qiladigan va yozadigan funksiya yarating. */


function spelling(word) {
    var result = [];
    var current = '';
    
    for (var i = 0; i < word.length; i++) {
        current += word[i];
        result.push(current);
    }
    
    return result;
}
console.log(spelling("bee")); 
console.log(spelling("happy"));   



//   2-usull

function spelling(word) {
    var result = [];
    for (var i = 0; i < word.length; i++) {
        result.push(word.slice(0, i + 1));
    }
    return result;
}
console.log(spelling("bee"));     
console.log(spelling("happy"));   

