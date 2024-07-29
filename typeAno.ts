let str = 'hellow'; // because of Type Interference this variable now only can assign string ,
// let str:string = 'hellow' 


let num =5;

str ="what" // we can't assign numer to the veriable because it only allows string 


function any(a:number,st:string){ // at this case we must needed to mention what type parameter of this function would take

    console.log(a * 10)
    console.log(st)
}


any(num,str)


// let obj:{
//     inti:number,
//     charac:string

// }={
//     inti:5,
//     charac:"anything"
// }


let obj = {
    inti:5,
    charac:"anything"
}
    

//optional chaining

// let obj2 = {
//     textfield:{
//         text:"were we are Type Script"
//     }
// }

let obj2=null // may sometime this obj might take data from bakcend so it take some times in that case we place null

if (obj2?.textfield?.text) { // this obj?. is optional chaning 
    console.log(`this is the :- ${obj2.textfield.text}`)
}

const title = obj2?.textfield?.text??"no title found"; // this is null coalescing operators

console.log(title)
