'use strict'

/*
 * Create a `words` function that takes a string
 * and return an array of each words using space as a delimiter
 *
 */
function words(a){
        let resultat="";
        let b=[];
        
        for (let i =0;i<a.length;i++){
            if(a[i]!==" "){
                resultat= resultat + a[i];
                
                console.log('resultat= '+ resultat)
            }
            b.push(resultat);
            resultat="";
            console.log('b= '+b)
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
