//union types
// union types means that in a variable either we assign a number or string (we assing multiple type in to a single variable)
var data = 1000;
data = "hellow";
var aV = ['hel', 5, 6];
console.log(aV);
console.log(data);
// TypeScript allows assigning null to a variable if the variable is of a specific type, like number.
var dt = 550;
//dt = null; // In this case, we can assign a null value to the variable of type number, and it compiles without error.
// We can avoid this null assignment to a typed variable by using the --strictNullChecks compiler option.
console.log(dt);
//tsc --strictNullChecks unionType.ts // run this command in terminal
//Non null asseration
var valu;
valu.toString();
