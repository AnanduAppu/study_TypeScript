var isthat = true;
var valStr = "hellow type script";
var valNum = 25;
//array cases
var strArray = ["hellow", "type script", "where we are"];
var numArray = [1, 2, 3, 4, 5, 6, 7];
var mixedArry = ["anandu", 22, true];
//let anArray:[]=[1,2,3]// we cant do array like this kind of assignment , must need predefine the types which we carring in the array
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["green"] = 1] = "green";
    Color[Color["blue"] = 2] = "blue";
})(Color || (Color = {}));
var color = Color.red;
//function
function adding(x, y) {
    return y;
}
var reVal = adding(1, "hellow");
console.log(reVal);
var user = {
    firstName: "anandu",
    lastName: "sankar",
    age: 25
};
user.firstName = "Manu";
console.log(user);
