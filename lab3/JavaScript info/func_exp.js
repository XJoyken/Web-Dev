function sayHi() {
    alert( "Hello" );
}

let sayHi = function() {
    alert( "Hello" );
};


function sayHi() {
    alert( "Hello" );
}

alert( sayHi ); // shows the function code

function sayHi() {   // (1) create
    alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello

let sayHi = function() { // (1) create
    alert( "Hello" );
};

let func = sayHi;

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

function showOk() {
    alert( "You agreed." );
}

function showCancel() {
    alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}

ask(
    "Do you agree?",
    function() { alert("You agreed."); },
    function() { alert("You canceled the execution."); }
);

let sum = function(a, b) {
    return a + b;
};

sayHi("John"); // Hello, John

function sayHi(name) {
    alert( `Hello, ${name}` );
}

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic anymore
    alert( `Hello, ${name}` );
};

let age = prompt("What is your age?", 18);

// conditionally declare a function
if (age < 18) {

    function welcome() {
        alert("Hello!");
    }

} else {

    function welcome() {
        alert("Greetings!");
    }

}

// ...use it later
welcome();

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

    welcome = function() {
        alert("Hello!");
    };

} else {

    welcome = function() {
        alert("Greetings!");
    };

}

welcome(); // ok now


let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
    function() { alert("Hello!"); } :
    function() { alert("Greetings!"); };

welcome(); // ok now