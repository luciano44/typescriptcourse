// Type Aliases

type stringOrNumber = string | number

type stringOrNumberArray = stringOrNumber[]

type Guitarist = {
  name?: String
  active: Boolean
  albums: stringOrNumber[]
}

const guit: Guitarist = {
  name: "oasid",
  active: false,
  albums: [123, "asdoi", 12],
}

// Literal types

let myName: "Luciano"

let username: "Dave" | "John" | "Amy"
username = "Dave"

// Functions
const add = (a: number, b: number): number => a + b

const logMsg = (msg: any): void => console.log(msg)

logMsg("hi")
logMsg(add(25, 5))

let subtract = function (a: number, b: number): number {
  return a - b
}

logMsg(subtract(25, 5))

type mathFunction = (a: number, b: number) => number
// interface mathFunction {
//   (a: number, b: number): number
// }

const multiply: mathFunction = (a, b) => a * b

logMsg(multiply(10, 5))

// optional parameters
const addAll = (a: number, b: number, c?: number): number => {
  return a + b + (c ?? 0)
}

const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c
}

console.log(sumAll(3, 3))

// Rest Parameters

const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr)
}

logMsg(total(10, 20, 30, 40))

const createError = (errMsg: string) => {
  throw new Error(errMsg)
}

const infinite = () => {
  let i = 0
  while (true) {
    i++
    console.log("-->", i, "<--")
    if (i === 1500) break
  }
}

// custom type guard
const isNumber = (value: any): boolean => typeof value === "number"

// use of the never type
const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "SString"
  if (isNumber(value)) return "NNumber"
  return createError("This should never happen!!")
}

console.log(numberOrString("asdsd"))
