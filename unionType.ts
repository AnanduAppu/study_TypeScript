//union types

// union types means that in a variable either we assign a number or string (we assing multiple type in to a single variable)

let data: number|string =1000

data = "hellow"

let aV : (number | string) [] =['hel',5,6];

console.log(aV)
console.log(data)


// TypeScript allows assigning null to a variable if the variable is of a specific type, like number.

let dt: number = 550;
//dt = null; // In this case, we can assign a null value to the variable of type number, and it compiles without error.

// We can avoid this null assignment to a typed variable by using the --strictNullChecks compiler option.

console.log(dt);

//tsc --strictNullChecks unionType.ts // run this command in terminal


//Non null asseration
//non-null assertion operator (!) is used to tell the TS compiler that a variable is not null or undefined, even if the compiler cannot infer that from the code
let valu:number|null;
valu!.toString()