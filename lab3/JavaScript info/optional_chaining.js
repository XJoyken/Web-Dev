let user = {}; // user has no address

alert( user?.address?.street ); // undefined (no error)

let user = null;

alert( user?.address ); // undefined
alert( user?.address.street ); // undefined

let key = "firstName";

let user1 = {
    firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined