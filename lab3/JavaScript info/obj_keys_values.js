let user = {
    name: "John",
    age: 30
};

// loop over values
for (let value of Object.values(user)) {
    alert(value); // John, then 30
}


let prices = {
    banana: 1,
    orange: 2,
    meat: 4,
};

let doublePrices = Object.fromEntries(
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object
    Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
);

alert(doublePrices.meat); // 8

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
}

function count(obj) {
    return Object.keys(obj).length;
}
