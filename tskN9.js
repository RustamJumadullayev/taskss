/*Quyidagi qoidalar asosida chatdagi foydalanuvchilar sonini qaytaruvchi funksiyani yozing */


function onlineUsers(num) {
    if (num === 0) {
        return "onlayn hech kim";
    } else if (num === 1) {
        return "user1 online";
    } else if (num === 2) {
        return "user1 va user2 online";
    } else {
        return "user1 va user2 va yana " + (num - 2) + " onlayn";
    }
}
console.log(onlineUsers(0)); 
console.log(onlineUsers(1)); 
console.log(onlineUsers(2)); 
console.log(onlineUsers(5)); 
