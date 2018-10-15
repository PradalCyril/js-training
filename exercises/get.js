'use strict'

/*
 * Create a `get` function that takes a key and return the corresponding value
 * in the sourceObject
 *
 * @notions Functions, Data-Structures, Get
 */

// Provided code :
const sourceObject = {
  num: 42,
  bool: true,
  str: 'some text',
  log: console.log,
}

// Your code :
function get(a){
  

  if (a === "str"){
    return sourceObject.str;
  }
  else if (a === "num"){
    return sourceObject.num;
  }
  else if (a === "bool"){
    return sourceObject.bool;
  }
  else if (a === "log"){
    return sourceObject.log;
  }else {
    return undefined;
  }
}
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof get, 'function')
assert.strictEqual(get('num'), 42)
assert.strictEqual(get('bool'), true)
assert.strictEqual(get('str'), 'some text')
assert.strictEqual(get('log'), console.log)
assert.strictEqual(get('noexist'), undefined)
// End of tests */
