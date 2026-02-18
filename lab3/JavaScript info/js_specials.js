alert('Hello'); alert('World');

alert('Hello')
alert('World')

alert("There will be an error after this message")

    [1, 2].forEach(alert)


let userName = prompt("Your name?", "Alice");
let isTeaWanted = confirm("Do you want some tea?");

alert( "Visitor: " + userName ); // Alice
alert( "Tea wanted: " + isTeaWanted ); // true


alert( '1' + 2 ); // '12', string
alert( 1 + '2' ); // '12', string


alert( 0 == false ); // true
alert( 0 == '' ); // true


// expression on the right side
let sum = (a, b) => a + b;

// or multi-line syntax with { ... }, need return here:
let sum = (a, b) => {
    // ...
    return a + b;
}

// without arguments
let sayHi = () => alert("Hello");

// with a single argument
let double = n => n * 2;