const oldFib = (n) => {
    if (n <= 2) return 1;
    return oldFib(n - 1) + oldFib(n - 2);
};


const newFib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = newFib(n - 1, memo) + newFib(n - 2, memo);
    return memo[n];
};

console.time("with old approach");
var value =oldFib(40);
console.timeLog("with old approach",value);

console.time("with new approach");
var value =newFib(40);
console.timeLog("with new approach",value);

module.exports = {
    oldFib: oldFib,
    newFib: newFib
};