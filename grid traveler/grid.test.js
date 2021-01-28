const { timeStamp } = require('console');
const grid=require('./grid');

test('test grids',()=>{
    expect(grid.newGridtraveler(1,1)).toBe(1);
    expect(grid.newGridtraveler(2,3)).toBe(3);
    expect(grid.newGridtraveler(3,2)).toBe(3);
    expect(grid.newGridtraveler(3,3)).toBe(6);
    expect(grid.newGridtraveler(18,18)).toBe(2333606220);
});