'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */
function words(a){
        let b=[];
        var words=a.split(' ');
        
        for (let i =0;i<a.length;i++){
            
            if (words[i]!==undefined){
                b.push(words[i]);
            }else{
                console.log("no")
            } 
        }
        return b
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof words, 'function')
assert.strictEqual(words.length, 1)
assert.deepStrictEqual(words('a b c'), [ 'a', 'b', 'c' ])
assert.deepStrictEqual(words('a 1 c'), [ 'a', '1', 'c' ])
assert.deepStrictEqual(words('a 1 c d e f'), [ 'a', '1', 'c', 'd', 'e', 'f' ])
assert.deepStrictEqual(words('wol.lol lo,lol'), [ 'wol.lol', 'lo,lol'])
// End of tests */
