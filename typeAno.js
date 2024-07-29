var _a, _b, _c;
var str = 'hellow'; // because of Type Interference this variable now only can assign string ,
// let str:string = 'hellow' 
var num = 5;
str = "what"; // we can't assign numer to the veriable because it only allows string 
function any(a, st) {
    console.log(a * 10);
    console.log(st);
}
any(num, str);
// let obj:{
//     inti:number,
//     charac:string
// }={
//     inti:5,
//     charac:"anything"
// }
var obj = {
    inti: 5,
    charac: "anything"
};
//optional chaining
// let obj2 = {
//     textfield:{
//         text:"were we are Type Script"
//     }
// }
var obj2 = null; // may sometime this obj might take data from bakcend so it take some times in that case we place null
if ((_a = obj2 === null || obj2 === void 0 ? void 0 : obj2.textfield) === null || _a === void 0 ? void 0 : _a.text) { // this obj?. is optional chaning 
    console.log("this is the :- ".concat(obj2.textfield.text));
}
var title = (_c = (_b = obj2 === null || obj2 === void 0 ? void 0 : obj2.textfield) === null || _b === void 0 ? void 0 : _b.text) !== null && _c !== void 0 ? _c : "no title found";
console.log(title);
