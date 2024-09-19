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
    name:'Sobhit',
    age:30
}

console.log("name" in user);//true


obj = {
    test: undefined
  };
  
//   alert( obj.test ); // it's undefined, so - no such property?
  
//   alert( "test" in obj ); // true, the property does exist!

//! Write the function isEmpty(obj) which returns true if the object has no properties false otherwise

function isEmpty(obj){
    for(let prop in obj){
        return false;
    }
    return true;
}

//! Sum object properties 

function objSum (obj){
    let sum = 0;
    for(let prop in obj){
        sum += obj[prop]
    }
    return sum;
}


//! ====================== PART 1 DONE =====================


