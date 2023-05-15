module.exports = {
    // Implementation of forEach from scratch
    forEach(arr, fn) {
        /* Version 1 */
        // for (let i = 0; i < arr.length; i++) {
        //     const value = arr[i];
        //     fn(value, i);
        // }

        /* Version 2 */
        for (let index in arr) {
            fn(arr[index], index);
        }
    },

    map(arr, fn) {
        const result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i], i));
        }
        return result;
    }
};