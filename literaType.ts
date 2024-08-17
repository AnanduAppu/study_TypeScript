//type script Literal
// "literal type" is a type that represents a specific value rather than a more general type
//Literal types allow you to specify that a variable or parameter can only have a specific value or set of values

const stg:"where we are" = "where we are";

let order : 'shipped'|'delivered'|'return';

order = 'shipped'; // We can use the variable 'order' for assignment, but it can only be assigned the specific values that we mentioned.

let inti :5|10|15;

inti=5;

console.log(inti)

//Type Allases
// type allases help to preset the values what we use in variable and we can re-use that preset valuese in our variable types

type course="Draft"|"Published"|"Unpublished"|"Archived";

let courseStatus:course='Draft';
let newStatus:course='Archived';
console.log(newStatus)
type Book = {
    title:string,
    price:number,
    author:string
}

let newBook:Book={
    title:"Plague",
    price:55,
    author:"Albert Camues"
}
console.log(newBook)
// but in object case mostly we use interfaces
