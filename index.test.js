const {forEach, map} = require('./index.js');

const test = (desc, fn) => {
    console.log('-------', desc, '-------');
    try {
        fn();
        console.log('Success ->',desc);
    } catch(err) {
        console.log('ERROR --->', desc);
        console.log(err.message);
    }
    
};

test('forEach function', () => {
    let sum = 0;
    forEach([1,2,3], (value) => {
        sum += value;
    });

    if (sum !== 6) {
        throw new Error('expected 6 for the summation of the array');
    }
})

test('map function', () => {
    const result = map([1,2,3], (value) => {
        return value * 2;
    })
    
    let index = 0;
    let compareValue = 2;
    if (result[index] !== compareValue) {
        throw new Error(`I wanted ${compareValue} but got ${result[index]}`);
    }
    index = 1;
    compareValue = 4;
    if (result[index] !== compareValue) {
        throw new Error(`I wanted ${compareValue} but got ${result[index]}`);
    }
    index = 2;
    compareValue = 6;
    if (result[index] !== compareValue) {
        throw new Error(`I wanted ${compareValue} but got ${result[index]}`);
    }
});

