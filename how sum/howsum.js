const howSum = (targetSum, numbers, memo = {}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (const num of numbers) {
        const remainder = targetSum - num;
        const remainederResult = howSum(remainder, numbers, memo);
        if (remainederResult !== null) {
            memo[targetSum] = [...remainederResult, num];
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return memo[targetSum];
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [4, 2]));
console.log(howSum(8, [2, 3, 5]));
console.log(howSum(300, [7, 14]));