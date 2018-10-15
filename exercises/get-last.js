'use strict'

/*
 * Create a `getLast` function that takes an array or a string
 * and return the last element.
 *
 * @notions Data-Structures, Get
 */

// Your code :
function getLast(a){
    if (typeof a == "string"){
        
        return a.substr(a.length-1,a.length);
    }else {
        let coucou = a.length-1;
        return a[coucou];
    }
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(getLast([ 2, 42 ]), 42)
assert.strictEqual(getLast([ 'pouet', 4, true ]), true)
assert.strictEqual(getLast([ getLast ]), getLast)
assert.strictEqual(getLast('salut'), 't')
assert.strictEqual(getLast([]), undefined)
// End of tests */
