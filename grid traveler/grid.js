const oldGridtraveler = (m, n) => {
    if (m === 1 && n === 1)
        return 1;
    if (m === 0 || n === 0)
        return 0;
    return oldGridtraveler(m - 1, n) + oldGridtraveler(m, n - 1);
}



const newGridtraveler = (m, n, memo = {}) => {
    const key = m + ',' + n;
    if (key in memo) return memo[key];
    if (m === 1 && n === 1)
        return 1;
    if (m === 0 || n === 0)
        return 0;
    memo[key] = newGridtraveler(m - 1, n, memo) + newGridtraveler(m, n - 1, memo);
    return memo[key];
}

module.exports={
    oldGridtraveler:oldGridtraveler,
    newGridtraveler:newGridtraveler
}    
// console.log(newGridtraveler(1, 1)); //1
// console.log(newGridtraveler(2, 3)); //3
// console.log(newGridtraveler(3, 2)); //3
// console.log(newGridtraveler(3, 3)); //6
// console.log(newGridtraveler(18, 18)); //2333606220