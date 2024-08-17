// Interfaces
// An interface defines the structure of objects

interface Person {
    readonly firstName: string;
    lastName?: string; // This is called an optional property
    place: string;
    age: number;
}

const newPerson: Person = {
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
const newPerson2: Person = {
    firstName: "Junaise",
    place: "Manjeri",
    age: 55
};

console.log(newPerson);
console.log(newPerson2);


// and the question is there what is the different between type alleas and interface 
// well both sharing similar behiviour but in interface we can extend our interface properties
// if i want to add a new field in the interface i can do it easily

interface Person {
    gender?:string
}

const newPerson3: Person = {
    firstName: "Jamshir",
    place: "Perinthalmanna",
    age: 45,
    gender:'Male'
};

console.log(newPerson3);