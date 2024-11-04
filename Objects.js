//! OBJECTS


// An empty object can be created using:

// let user = new Object();
// let user = {}

// To remove a property we can use the delete operator 
// delete user.age;

let user = {
    name: 'John',
    age: 30,
    city: 'New York',
    "hello word": true // multiword property name must be quoted
}

// console.log(user['hello word']);

// delete user["hello word"];
// console.log(user)


// console.log("age" in user); // true

// console.log(user.hasOwnProperty('age')); // true

for(let i in user){
    console.log(i , user[i]);
}

// Are objects ordered
// ordered in a special fashion : integer properties are sorted, others appear in creation order

//Math.trunc --> removes the decimal part


//-----------------------------------------------------------


//! Object references and copying



// One of the fundamental differences of objects versus primitives is that objects are stored and copied “by reference”, whereas primitive values: strings, numbers, booleans, etc – are always copied “as a whole value”.


let admin = user // copy the reference

admin.age = 35;
// console.log(user.age) // 35 

// Two objects are equal only if they are the same object

// console.log(user == admin); // true
// console.log(user === admin); // true

// We can use Object.assign

// Object.assign(dest,...sources);

// if the copied property name already exists it gets overwritten

user = {
    name:'John',
    sizes:{
        height:182,
        width:50
    }
};

// console.log(user['sizes']['height']);

// to solve this problem of nested objects copying 
// we use structuredClone 

let clone = structuredClone(user);
// console.log(clone);
// clone['sizes']['height'] = 200;
// console.log(user);
// console.log(clone);



//Although there are cases when structuredClone fails
// function properties aren't supported

// To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance _.cloneDeep(obj) from the JavaScript library lodash.

// console.log(Object.values(admin));
// console.log(Object.keys(admin));



//!------------------------------------------------------------


// Garbage collection


// the main concept of memory management in JS is reachability .
// reachable values are those that are accessible or usable somehow. They are guaranteed to be stored in memory.

// Unreachable values are those that are not reachable and therefore, are eligible for garbage collection.


// The basic garbage collection algorithm is called 'mark-and-sweep'.


// some of the optimizations:
// generational collection: objects are split into two sets new ones and old ones
// incremental collection
// idle time collection: tries to run only while the CPU is idle, to reduce the possible effect on the execution

//--------------------------------------------------------


// This

user = {
    name:'Sobhit',
    age:23,
    say(){
        console.log(this);
    }
}

user.say(); // when printing this getting the whole object

// Arrow functions are special: they don’t have their “own” this. If we reference this from such a function, it’s taken from the outer “normal” function.

function getss(){
    'use strict'; // if using use strict getting undefined
    console.log(this); // otherwise getting the global context
}
// getss();


//----------------------------------------------------------


// Constructor, operator new

// When a function is executed with new, it does the following steps:

// A new empty object is created and assigned to this.
// The function body executes. Usually it modifies this, adds new properties to it.
// The value of this is returned.


// function User(name) {
//     // this = {};  (implicitly)
  
//     // add properties to this
//     this.name = name;
//     this.isAdmin = false;
  
//     // return this;  (implicitly)
//   }


//------------------------------------------------


//Optional Chaining


// Can be used in functions also like userAdmin.admin?.()
// ALso in user1?.[]

//---------------------------------------------------------

// Symbols


// a symbol represents a unique identifier 

let id1 = Symbol("id");
let id2 = Symbol("id");

// console.log(id1 === id2); // false
// console.log(id1);

// symbols allow us to create 'hidden' properties of an object, that no other part of code can accidentally access or overwrite

user = {
    name:'Sobhit',
    age:21,
    [id1]: 'hello'
}

// console.log(user[id1]);


// Object.keys(user) also ignores them. That’s a part of the general “hiding symbolic properties” principle. If another script or a library loops over our object, it won’t unexpectedly access a symbolic property.

// In contrast, Object.assign copies both string and symbol properties: 


// // read from the global registry
// let id = Symbol.for("id"); // if the symbol did not exist, it is created

// // read it again (maybe from another part of the code)
// let idAgain = Symbol.for("id");

// // the same symbol
// alert( id === idAgain ); // true

// get symbol by name
let sym = Symbol.for("name");
let sym2 = Symbol.for("id");

// get name by symbol
alert( Symbol.keyFor(sym) ); // name
alert( Symbol.keyFor(sym2) ); // id

//-----------------------------------------------------


// Object to primitive conversion


// all objects are true in a boolean context.

// In case of such operations, objects are auto-converted to primitives, and then the operation is carried out over these primitives and results in a primitive value.

// There are three variants of type conversion, that happen in various situations. They’re called “hints”, as described in the specification: 


// converts to string 
// // output
// alert(obj);

// // using object as a property key
// anotherObj[obj] = 123;


// number

// default
