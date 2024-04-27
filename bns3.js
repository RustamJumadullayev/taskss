/*“[0, n]” oralig‘ida “n” farqli raqamlarni o‘z ichiga olgan “raqamlar” massivi berilgan bo‘lsa,
massivda bo‘lmagan oraliqdagi yagona raqamni qaytaring. */


function missingNumber(nums) {
    const n = nums.length;
    let totalSum = n * (n + 1) / 2; 
    let sum = nums.reduce((acc, curr) => acc + curr, 0); 
    return totalSum - sum; 
}
console.log(missingNumber([3, 0, 1]))
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]))
