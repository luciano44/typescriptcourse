"use strict";
// Type Assertion / Type Casting
// convert to more or less specific
let a = "hello";
let b = a; // less specific
let c = a; // more specific
let d = "world";
let e = "world";
const addConcat = (a, b, c) => {
    if (c === "add")
        return a + b;
    return "" + a + b;
};
let myVal = addConcat(2, 2, "concat");
// be careful! TS sees no problem here - but a string is returned
let nextVal = addConcat(2, 2, "concat");
// The DOM
const img = document.querySelector("img");
const myImg = document.getElementById("img");
const nextImg = document.getElementById("img");
img.src;
myImg.src;
