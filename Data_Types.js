// there are 7 primitive types : string, number, bigint, boolean, symbol , null and undefined

// primitives can provide methods but still remain lightweight

// syntactic sugar _

//number.toString(base)


//Math.trunc

//isNaN converts its argument to a number and then tests it for being NaN

//NaN === NaN  -> false


//isFinite converts its argument to a number and returns true if it's a regular number

//parseInt("100px",base)

//! STRINGS


// benefit of using .at is that it counts negative index also from the end of the string

// strings are immutable

// str.indexOf('id',startingIndex)

// str.lastIndexOf('id',startingIndex)

//str.includes('id',startingIndex) //boolean value

//Substring
// substring, substr and slice
// str.slice(start [,end]) returns the part of the string from start to end
//if no second argument goes till the end of the string
// negative values are also possible

//str.substring(start [,end]) same as slice but it allows start to be greater than end swaps start and end

// negative arguments are not supported they are treated as 0

//str.substr(start [,length]) returns the part of the string from start to start + length


//str.codePointAt(pos) returns a decimal number the code for the character at position pos

//String.fromCodePoint(code) creates a character by its numeric

//str.localeCompare(str2) return - if str < str2 ,+ str > str2 and 0 if they are equal

