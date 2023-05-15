const {forEach, map} = require('./index.js');
const assert = require('node:assert');

it('forEach function', () => {
    let sum = 0;
    forEach([1,2,3], (value) => {
        sum += value;
    });

    assert.strictEqual(sum, 6, 'the sum should be 6');
})

it('map function', () => {
    const result = map([1,2,3], (value) => {
        return value * 2;
    });

    assert.deepStrictEqual(result, [2,4,6]);
});

