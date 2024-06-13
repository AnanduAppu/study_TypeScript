
/*TypeScript (TS) is a programming language developed and maintained by Microsoft. 
It's often described as a "superset" of JavaScript, meaning that it builds on JavaScript by adding new features*/

//Superset of JavaScript: TypeScript includes all the features of JavaScript and adds additional powerful type system on top of it.

/*Statically Typed: One of the main features of TypeScript is its ability to add type annotations. 
This means you can specify the types of variables (e.g., string, number, boolean), which helps catch
 errors during development rather than at runtime.*/

 // the presence of type system allows us to catch many errors at developement time

 const nameWhat = 'typescript bootcamping';

 
 function printCourseName(name:string) {
     console.log(name.toUpperCase());
 }
 
 printCourseName(nameWhat);
//printCourseName(nameWs)// this value is undeifined we can see an error underline
//printCourseName(100) // theerror out here when after we changed the type of name parameter to string now we cant send number to that function

/*after we add string type to the parameter in the above function we can catch error in compilation , now that function only takes 
string not any other types*/