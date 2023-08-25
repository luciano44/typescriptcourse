class Coder {
  secondLang!: string

  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript"
  ) {
    this.name = name
    this.music = music
    this.age = age
    this.lang = lang
  }

  getAge() {
    return `Hello, I am ${this.age}yo`
  }

  getLang() {
    return this.lang
  }
}

const lu = new Coder("luciano", "rock", 25)

// console.log(lu.age)
// console.log(lu.lang)

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age)
    this.computer = computer
  }

  public getLang() {
    return `I code in ${this.lang}`
  }
}

const dev = new WebDev("asus", "luciano", "rock", 27)

// console.log(dev.getLang())

interface Musician {
  name: string
  instrument: string
  play(action: string): string
}

class Guitarist implements Musician {
  name: string
  instrument: string

  constructor(name: string, instrument: string) {
    this.name = name
    this.instrument = instrument
  }

  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`
  }
}

const page = new Guitarist("Jimmy Page", "Guitar")

console.log(page.play("strums"))
/////////////////////////

class Peeps {
  static count: number = 0
  static getCount(): number {
    return Peeps.count
  }
  public id: number
  constructor(public name: string) {
    this.name = name
    this.id = ++Peeps.count
  }
}

const john = new Peeps("John")
const steve = new Peeps("Steve")
const amy = new Peeps("Amy")

console.log(john.id)

console.log(Peeps.count)
//////////////////////////////////////////

class Bands {
  private dataState: string[]

  constructor() {
    this.dataState = []
  }

  public get data(): string[] {
    return this.dataState
  }

  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value
      return
    } else throw new Error("Param is not an array of strings")
  }
}

const myBands = new Bands()

myBands.data = ["led zeppelin", "nirvana", "u2"]
console.log(myBands.data)

myBands.data = [...myBands.data, "ZZ Top"]
console.log(myBands.data)
myBands.data = ["Van Halen", "5150"]
