const { add, subtract } = require('../src/index');
test('add 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
});

test('add 3 - 2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
});