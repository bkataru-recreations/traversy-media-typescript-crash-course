/ Basic Types

let id: number = 5
let company: string = 'Me'
let isPublished: boolean = true
let x: any = 'Hello'

// Arrays & Tuples

let ids = [1, 2, 3, 4, 5]
let arr: any[] = [1, true]

// Tuple

let person: [number, string, boolean] = [1, 'hello', true]

// Tuple Array

let employee: [number, string][]

employee = [
  [1, 'me'],
  [2, 'you'],
]

// Union

let uuid: string | number
uuid = 22

// Enum

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

console.log(Direction1.Left)

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// Objects

type User = {
  id: number
  name: string
}

const user: User = { id: 1, name: 'John' }

// Type Assertion

let cid: any = 1
// let customerId = <string>cid
let customerId = cid as number

// Functions

function addNum(x: number, y: number): number {
  return x + y
}

// Void
function log(message: string | number): void {
  console.log(message)
}

// Interfaces
interface UserInterface {
  readonly id: number
  name: string
  age?: number
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
}

// can use type like this but cant use interface like so
type Point = number | string
const p1: Point = 2

// Interfaces with Functions

interface MathFunc {
  (x: number, y: number): number
}

const add: MathFunc = (x: number, y: number): number => x + y
const sub: MathFunc = (x: number, y: number): number => x - y

// Classes
class Person {
  private id: number
  protected name: string

  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }

  register() {
    return `${this.name} is now registered`
  }
}

const bol = new Person(1, 'me')

// Interfaces with Classes
interface CarInterface {
  model: string
  name: string
  drive(): string
}

class Car implements CarInterface {
  model: string
  name: string
  hello: number

  constructor(model: string, name: string) {
    this.model = model
    this.name = name
    this.hello = 2
  }

  drive() {
    return `${this.name} is driving`
  }
}

// Subclasses
class Employee extends Person {
  position: string

  constructor(id: number, name: string, position: string) {
    super(id, name)
    this.position = position
  }
}

const emp = new Employee(3, 'me', 'also me')

console.log(emp.register())

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items)
}

let numArray = getArray<number>([1, 2, 3, 4])
let strArray = getArray<string>(['me', 'you', 'them'])

numArray.push(5)
