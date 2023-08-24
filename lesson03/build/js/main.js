"use strict";
let stringArray = ["one", "two", "three"];
let guitars = ["strat", "lespaul", 5150];
let mixedData = ["EVH", 1984, true];
stringArray[0] = "John";
stringArray.push("hey");
guitars[0] = 1984;
guitars.unshift("Jim");
let test = [];
let bands = [];
bands.push("Van Halen");
//Tuple
let myTuple = ["hello", 22, true];
let mixed = ["John", 1, false];
//Objects
let myObj;
myObj = [];
myObj = bands;
myObj = {};
const exampleObj = {
    prop1: "Dave",
    prop2: true,
};
exampleObj.prop1 = "Lucinao";
let evh = {
    name: "Eddy",
    active: false,
    albums: [1984, 5051, "OU812"],
};
let jp = {
    //   name: "Jimmy",
    active: true,
    albums: ["I", "II", "IV"],
};
const greetGuitarist = (guitarist) => {
    var _a;
    if (guitarist.name) {
        return `hello ${(_a = guitarist.name) === null || _a === void 0 ? void 0 : _a.toUpperCase()}`;
    }
    return "hello";
};
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 34] = "U";
    Grade[Grade["D"] = 35] = "D";
    Grade[Grade["C"] = 36] = "C";
    Grade[Grade["B"] = 37] = "B";
    Grade[Grade["A"] = 38] = "A";
})(Grade || (Grade = {}));
console.log(Grade.B);
