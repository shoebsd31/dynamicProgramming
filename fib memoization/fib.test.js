const fib = require('./fib');



test('fib tests for multiples of 7', () => {
    expect(fib.newFib(7)).toBe(13);
    expect(fib.newFib(14)).toBe(377);
    expect(fib.newFib(49)).toBe(7778742049);
});

