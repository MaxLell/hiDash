const {forEach, map} = require('./index.js');
const assert = require('node:assert');

const test = (desc, fn) => {
    console.log('');
    console.log('-------', desc, '-------');
    try {
        fn();
        console.log('Success ->',desc);
    } catch(err) {
        console.log('ERROR --->', desc);
        console.log(err.message);
    }
    console.log('----------------------------------');
    console.log('');

    
};

test('forEach function', () => {
    let sum = 0;
    forEach([1,2,3], (value) => {
        sum += value;
    });

    assert.strictEqual(sum, 6, 'the sum should be 6');
})

test('map function', () => {
    const result = map([1,2,3], (value) => {
        return value * 2;
    });

    assert.strictEqual(result[0], 2);
    assert.strictEqual(result[1], 4);
    assert.strictEqual(result[2], 6);
});

