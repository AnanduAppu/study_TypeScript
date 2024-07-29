//arrays 

let arrNum = [1,2,3,4]; // by type interference this automatically set ot number array

//arrNum.push("string")// we cant push string in this arrNum array because it only allow number to array


console.log(arrNum)


//enum

enum courseType { // enum count from 0 to end 
    Free = 10, // we can set enum count from where ever we want , and it will start from there
    Primium = "premium", // we can assing string values inside the enum fields
    Private = 'private',
    Hidden= 'hidden'
} 

let obj ={
    courseName:"Type Script",
    youtype:courseType.Hidden
}

console.log(obj)