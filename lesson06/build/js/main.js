"use strict";
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
=======
>>>>>>> c6261681c478af1fde9b7d76f54bbbcd011fa10e
class Coder {
    constructor(name, music, age, lang = "Typescript") {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return `Hello, I am ${this.age}yo`;
    }
    getLang() {
        return this.lang;
    }
}
const lu = new Coder("luciano", "rock", 25);
// console.log(lu.age)
// console.log(lu.lang)
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age);
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I code in ${this.lang}`;
    }
}
const dev = new WebDev("asus", "luciano", "rock", 27);
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const page = new Guitarist("Jimmy Page", "Guitar");
console.log(page.play("strums"));
/////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const john = new Peeps("John");
const steve = new Peeps("Steve");
const amy = new Peeps("Amy");
console.log(john.id);
console.log(Peeps.count);
//////////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
            this.dataState = value;
            return;
        }
        else
            throw new Error("Param is not an array of strings");
    }
}
const myBands = new Bands();
myBands.data = ["led zeppelin", "nirvana", "u2"];
console.log(myBands.data);
myBands.data = [...myBands.data, "ZZ Top"];
console.log(myBands.data);
myBands.data = ["Van Halen", "5150"];
<<<<<<< HEAD
>>>>>>> c6261681c478af1fde9b7d76f54bbbcd011fa10e
=======
>>>>>>> c6261681c478af1fde9b7d76f54bbbcd011fa10e
