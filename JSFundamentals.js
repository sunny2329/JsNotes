// As a rule, only the simplest scripts are put into HTML. More complex ones reside in separate files. The benefit of a separate file is that the browser will download it and store it in its cache.

// Other pages that reference the same script will take it from the cache instead of downloading it, so the file is actually downloaded only once.
// That reduces traffic and makes pages faster


// JS interprets the line break as an "implicit" semicolon. This is called an automatic semicolon insertion

//JS does not assume a semicolon before square brackets.

// let user = 'Sobhit', age = 230;

// the name must contain only letter, digits, or the symbols $ and _

// The variable can't start with a digit

// there are eight basic data types

// console.log(1/0); // Infinity 

// console.log(0/0); // NaN (Not a Number)

// NaN ** 0 is 1

// A BigInt value is created by appending n to the end of an integer:

// the meaning of undefined is "value is not assigned"
// console.log(typeof(typeof 'sobhit'));  // string


// result = prompt(title,[default]);

// result = confirm(question);


// null becomes zero while undefined becomes NaN

// The binary + is the only operator that supports strings in such a way. Other arithmetic operators work only with numbers and always convert their operands to numbers.


// The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number.
// it actually does the same thing as Number(....) but is shorter

// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

// let a = 0;
// alert( Boolean(a) ); // false

// let b = "0";
// alert( Boolean(b) ); // true

// alert(a == b); // true!

// console.log(null === undefined); //false

// console.log(null > 0); //false 
// console.log(null ==0); // false
// console.log(null >= 0) true


// Precedence of AND is higher than OR

// A double NOT !! is sometimes used for converting a value to boolean type
// console.log(!!'sobhit');
// -1 || 0 gives -1 as truthy value

// nullish coalescing operator ??
// the result of a ?? b is :
//if a is defined then a
// if a isn't defined, then b
// console.log(undefined ?? 2);

// || returns the first truthy value
// ?? returns the first defined value

//! LOOPS
// Please note that the two for semicolons ; must be present. Otherwise, there would be a syntax error.


// Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.


// outer: for (let i = 0; i < 3; i++) {

//     for (let j = 0; j < 3; j++) {

//         let input = prompt(`Value at coords (${i},${j})`, '');

//         // if an empty string or canceled, then break out of both loops
//         if (!input) break outer; // (*)

//         // do something with the value...
//     }
// }

// labelName : for(..) {}

// But for 3, the result of the prompt is a string "3", which is not strictly equal === to the number 3. So we’ve got a dead code in case 3! The default variant will execute.


// A function with an empty return or without it returns undefined

