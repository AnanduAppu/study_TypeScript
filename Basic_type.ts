let isthat:Boolean = true;
let valStr:String = "hellow type script";
let valNum:Number = 25;


//array cases
let strArray:string[]=["hellow","type script","where we are"]
let numArray:Number[]=[1,2,3,4,5,6,7]
let mixedArry:[string,Number,Boolean]=["anandu",22,true]

//let anArray:[]=[1,2,3]// we cant do array like this kind of assignment , must need predefine the types which we carring in the array
enum Color {red,green,blue}

let color: Color = Color.red;

//function
function adding(x:number,y:string){
    return y
}

let reVal = adding(1,"hellow")


console.log(reVal)

//interface :- interface define the structre of objects
interface person {
    firstName:string,
    lastName:string,
    age:number
}

let user:person={
    firstName:"anandu",
    lastName:"sankar",
    age:25
}

user.firstName="Manu"

console.log(user)