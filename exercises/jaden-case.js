'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */
function jadenCase(string){
    var words=string.split(' ')
    var newString="";
    for (let i=0;i<string.length;i++){
        console.log("Words : ",words[i]);
        console.log("Words +1 : ",words[i+1]);
        if (words[i] !== undefined && words[i+1] !== undefined){
            
            newString += words[i].substring(0,1).toUpperCase() +words[i].substring(1).toLowerCase() +" ";
            
        }else if (words[i] !== undefined && words[i+1] == undefined){
            
            newString += words[i].substring(0,1).toUpperCase() +words[i].substring(1).toLowerCase();
            
        }else{
            console.log("LOLILOL",newString);
            return newString;
        }
    }
    
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('SALUT COMMENT TU VAS ?'), 'Salut Comment Tu Vas ?')
assert.strictEqual(jadenCase('STRmdr'), 'Strmdr')
assert.strictEqual(jadenCase('234235345345665YHGGFGFDGFDG'), '234235345345665yhggfgfdgfdg')
// End of tests */
