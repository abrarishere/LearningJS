// slice() extracts a section of an array
// and returns a new array
// without modifying the original array

let fullName = "Abrar Saleem";
let firstName;
let lastName;

// lastName = fullName.slice(6);
// firstName = fullName.slice(0, 5);
firstName = fullName.slice(0, fullName.indexOf(' '));
lastName = fullName.slice(fullName.indexOf(' ') + 1);
console.log(firstName);
console.log(lastName)