"use strict";
// Type Aliases
const guit = {
    name: "oasid",
    active: false,
    albums: [123, "asdoi", 12],
};
// Literal types
let myName;
let username;
username = "Dave";
// Functions
const add = (a, b) => a + b;
const logMsg = (msg) => console.log(msg);
logMsg("hi");
logMsg(add(25, 5));
let subtract = function (a, b) {
    return a - b;
};
logMsg(subtract(25, 5));
// interface mathFunction {
//   (a: number, b: number): number
// }
const multiply = (a, b) => a * b;
logMsg(multiply(10, 5));
// optional parameters
const addAll = (a, b, c) => {
    return a + b + (c !== null && c !== void 0 ? c : 0);
};
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
console.log(sumAll(3, 3));
// Rest Parameters
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
logMsg(total(10, 20, 30, 40));
const createError = (errMsg) => {
    throw new Error(errMsg);
};
const infinite = () => {
    let i = 0;
    while (true) {
        i++;
        console.log("-->", i, "<--");
        if (i === 1500)
            break;
    }
};
// custom type guard
const isNumber = (value) => typeof value === "number";
// use of the never type
const numberOrString = (value) => {
    if (typeof value === "string")
        return "SString";
    if (isNumber(value))
        return "NNumber";
    return createError("This should never happen!!");
};
console.log(numberOrString("asdsd"));
