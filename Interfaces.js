// Interfaces
// An interface defines the structure of objects
var newPerson = {
    firstName: "Raju",
    lastName: "Dholapur",
    place: "Dholapur",
    age: 22
};
// We cannot overwrite the 'firstName' field because it is readonly
// newPerson.firstName = "Rajus"; // This will cause an error
// Sometimes, we don't need to mention the last name, but we have already set the 'lastName' field in the interface.
// To avoid an error, we can add '?' to make it an optional property.
// See how we avoided the 'lastName' field by mentioning '?' in that field in the interface
var newPerson2 = {
    firstName: "Junaise",
    place: "Manjeri",
    age: 55
};
console.log(newPerson);
console.log(newPerson2);
var newPerson3 = {
    firstName: "Jamshir",
    place: "Perinthalmanna",
    age: 45,
    gender: 'Male'
};
console.log(newPerson3);
