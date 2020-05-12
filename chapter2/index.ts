/******************************
 ***  CHAPTER 2 - COMPILER  ***
 ******************************/

 /**
  * noEmitOnError: true -> doesn't compile to JS when .ts file has an error (default is false)
 */

let str = 'joao'
str = 12                        // this line generates an error, if noEmitOnError == true -> index.js won't be generated