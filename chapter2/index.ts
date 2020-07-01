/******************************
 ***  CHAPTER 2 - COMPILER  ***
 ******************************/

 /**
  * noEmitOnError: true -> doesn't compile to JS when .ts file has an error (default is false)
 */

//let str = 'joao'
//str = 12                        // this line generates an error, if noEmitOnError == true -> index.js won't be generated


/**
 * target: javascript version ("es5", "es6", ...)
 */

 /**
  * sourceMap: true ->generates a .js.map file that maps the js and ts files, in that way
  * you can analysis and debug your .ts file in the browser
  */

/**
 * outDir: directory where the .js files will be generated
 */

/**
 * outFile: generate a single .js file for the entire application (it's not compatible with commonjs)
 */

 /**
  * https://www.typescriptlang.org/docs/handbook/tsconfig-json.html
  * https://www.typescriptlang.org/docs/handbook/compiler-options.html
  */