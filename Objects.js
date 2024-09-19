/*
    There are eight data types in Javascript
    seven of them are called 'primitive' because their values contain only a single thing

    key --> string 
    and value can be anything

*/

// Can be created using one of two syntaxes 

let user = new Object(); //object constructor
let users = {}; // object literal

user = {
    name: "John",
    age: 30,
    city: "New York"
}

// To remove a property we can use the delete operator
delete user.age

// we can also use multiword property names, but then they must be quoted

user = {
    "full name": "John Doe",
    "age": 30,
    "city": "New York"
}

//access using square brackets
console.log(user["full name"]);

//delete 
delete user["full name"];


//Computed properties 

//we can use square brackets in an object literal, when creating an object. 


// as we already know a variable cannot have a name equal to one of the language-reserved words like "for" let etc

// these properties are all right
let obj = {
    for: 1,
    let: 2,
    return: 3
};

// alert(obj.for + obj.let + obj.return);  // 6


user = {
    name: 'Sobhit',
    age: 30
}

console.log("name" in user);//true


obj = {
    test: undefined
};

//   alert( obj.test ); // it's undefined, so - no such property?

//   alert( "test" in obj ); // true, the property does exist!

//! Write the function isEmpty(obj) which returns true if the object has no properties false otherwise

function isEmpty(obj) {
    for (let prop in obj) {
        return false;
    }
    return true;
}

//! Sum object properties 

function objSum(obj) {
    let sum = 0;
    for (let prop in obj) {
        sum += obj[prop]
    }
    return sum;
}


//! ====================== PART 1 DONE =====================

//! Object references and copying

//objects are stored and copied "by reference" whereas primitive values : strings, numbers, booleans are always copied as a whole value


user = {
    name: "John",
    age: 30
}

let admin = user;

admin.age = 31;

console.log(user.age); // 31


// two objects are equal only if they are the same object

let a = {};
let b = {};
let c = a

console.log(a === b); // false

console.log(a === c); // true

//Object.assign(dest,...sources);

// the first argument dest is a target object
//if the copied property name already exists it gets overwritten

//! Nested Cloning

obj = {
    name: "John",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York"
    }


};

// there's structuredClone method that implements deep cloning

// the call structuredClone(object) clones the object with all nested properties

//function properties aren't supported


// to handle such complex cases we may need to use a combination of cloning methods, write custom code

// for instance _.cloneDeep(obj) from the JS library lodash



//! ============== PART2 DONE ==================


//! Garbage Collection

// main concept of memory management in JS is reachability

//1. There'a a base set of reachable values, that cannot be deleted for obvious reasons
// currently executing function, its local variables and parameteres, global variables
// these values are called roots

// if there’s an object in a global variable, and that object has a property referencing another object, that object is considered reachable. And those that it references are also reachable. Detailed examples to follow.


// There’s a background process in the JavaScript engine that is called garbage collector. It monitors all objects and removes those that have become unreachable.


// the basic garbage collection algorithm is called 'mark-and-sweep'

//! Steps
//1. garbage collector takes roots and "marks" them.
//2. then it visits and marks all references from them
//3. then it visits marked objects and markts their references 
//4. and so on until every reacahable references are visited
//5. all objects except marked ones are removed



//! ===================== PART 3 DONE =========================


//! THIS

// the value of this is evaluated during the run-time depending on the context

// in non strict mode the value of this in such case wil be the global object , this is a historial behavior that use strict fixes

// in js this is free


// arrow functions have no this

// it is taken from the outer normal function


//useful when we need to take it from the outer context



//! ==========PART 4 DONE ================



//Constructor functions technically are regular functions there are two conventions 
// they are named with capital letter first
// they should be executed only with new operator

// when we use new keyword, it creates a new empty object and sets the prototype property of the new object to the prototype property of the constructor function

// we can not use ?. for writing


// As user objects belong to another codebase, it’s unsafe to add fields to them, since we might affect pre-defined behavior in that other codebase. However, symbols cannot be accessed accidentally. The third-party code won’t be aware of newly defined symbols, so it’s safe to add symbols to the user objects.


// symbols are skipped by for...in
//Object.keys(user) also igonores them


