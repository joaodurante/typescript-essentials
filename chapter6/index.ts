/*******************************
 ***  CHAPTER 6 - INTERFACE  ***
 *******************************/

interface Human {
    name: string,
    age?: number,
    [attibute: string]: any                 // attribute without name
    greet(): string
}

function sayHi(person: Human) {
    console.log(`Hi ${person.name}`)
}

const joao: Human = {
    name: 'Joao',
    age: 22,
    weight: 67,
    greet(): string {
        return `Hello my name is ${this.name}, I'm ${this.age}`
    }
}

const maria: Human = {
    name: 'Maria',
    age: 25,
    gender: 'female',
    greet(): string {
        return `Hello, my name is ${this.name}`
    }
}

sayHi(joao)
console.log(joao.greet())
sayHi(maria)
console.log(maria.greet())


// using classes //
class Operator implements Human {
    constructor(
        public name: string,
        public age: number,
        public gender: string,
        public height: number
    ){}

    greet(): string {
        return `Hello my name is ${this.name}, I'm ${this.age}`
    }
}

const bob = new Operator('Bob', 31, 'male', 175)
console.log(bob.greet())


// function interface //
interface CalculateFunction {
    (x: number, y: number): number
}

const pow: CalculateFunction = (x: number, y: number): number => {
    return x ** y
}

console.log(pow(2, 4))


// inheritance //
interface A {
    a(): void
}

interface B {
    b(): void
}

interface ABC extends A, B {
    c(): void
}

class AB implements A, B {
    a(): void {}
    b(): void {}
}

class ABC implements ABC {
    a(): void {}
    b(): void {}
    c(): void {}
}

function test(b: B){}
test(new ABC())

abstract class AbstractABD implements A, B {
    a(): void {}
    b(): void {}

    abstract d(): void
}


// use //
interface Object {
    log(): void
}

Object.prototype.log = function() {
    console.log(this.toString())
}

const x = 2
x.log()                 // without the interface Object, this line returns an error
