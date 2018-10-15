'use strict'

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */
function cutFirst(a){
    return a.substr(2)
}
function cutLast(b){
    let c = b.length-2;
    return b.substr(0,c);
}
function cutFirstLast(d){


    let coucou = cutFirst(d);
    coucou =cutLast(coucou);
    return coucou;
    
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, "function");
assert.strictEqual(typeof cutLast, "function");
assert.strictEqual(typeof cutFirstLast, "function");
assert.strictEqual(cutFirst('qsdqssqqq'), 'dqssqqq');
assert.strictEqual(cutLast('qsdqssqqq'), 'qsdqssq');
assert.strictEqual(cutFirstLast('qsdqssqqq'), 'dqssq');
// End of tests */
