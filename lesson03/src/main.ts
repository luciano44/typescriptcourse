let stringArray = ["one", "two", "three"]
let guitars = ["strat", "lespaul", 5150]
let mixedData = ["EVH", 1984, true]

stringArray[0] = "John"
stringArray.push("hey")

guitars[0] = 1984
guitars.unshift("Jim")

let test = []
let bands: string[] = []
bands.push("Van Halen")

//Tuple

let myTuple: [string, number, boolean] = ["hello", 22, true]

let mixed = ["John", 1, false]

//Objects

let myObj: object

myObj = []
myObj = bands
myObj = {}

const exampleObj = {
  prop1: "Dave",
  prop2: true,
}

exampleObj.prop1 = "Lucinao"

interface Guitarist {
  name?: String
  active: Boolean
  albums: (string | number)[]
}

let evh: Guitarist = {
  name: "Eddy",
  active: false,
  albums: [1984, 5051, "OU812"],
}

let jp: Guitarist = {
  //   name: "Jimmy",
  active: true,
  albums: ["I", "II", "IV"],
}

const greetGuitarist = (guitarist: Guitarist) => {
  if (guitarist.name) {
    return `hello ${guitarist.name?.toUpperCase()}`
  }
  return "hello"
}

// Enums

enum Grade {
  U = 34,
  D,
  C,
  B,
  A,
}

console.log(Grade.B)
