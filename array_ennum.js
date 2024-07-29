//arrays 
var arrNum = [1, 2, 3, 4]; // by type interference this automatically set ot number array
//arrNum.push("string")// we cant push string in this arrNum array because it only allow number to array
console.log(arrNum);
//enum
var courseType;
(function (courseType) {
    courseType[courseType["Free"] = 10] = "Free";
    courseType["Primium"] = "premium";
    courseType["Private"] = "private";
    courseType["Hidden"] = "hidden";
})(courseType || (courseType = {}));
var obj = {
    courseName: "Type Script",
    youtype: courseType.Hidden
};
console.log(obj);
