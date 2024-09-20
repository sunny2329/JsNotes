// the value of this inside a handler is the element the one which has the handler on it

//! wrong button.onclick = sayThanks()

// Don't use setAttribute for handlers

// element.addEventlistener(event, handler,[options]);

// options
// once : if true the listener is automatically removed after is triggers
// capture
//passive : if true then the handler will not call preventDefault()


// if we don't store the function in a variable then we can't remove it 

// when an event happens the browser creates an event object 

//we can assign not just a function , but an object as event handler using addEventListener

//! BUBBLING AND CAPTURING
// when an event happens on an element it first runs the handlers on it then on its parent

//event.stopPropagation

// event.stopImmediatePropagation after it no other handlers execute

// turn third argument as true to enter capture 


//! EVENT DELEGATION

// when we have a lot of similar elements we can add a single event listener to a parent element


