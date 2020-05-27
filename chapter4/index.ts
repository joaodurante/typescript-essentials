/*******************************
 ****  CHAPTER 3 - CLASSES  ****
 *******************************/

 // simple class //
class DateClass {
    // public
    year: number
    month: number
    day: number

    constructor(year: number = 1970, month: number = 0, day: number = 0) {
        this.year = year
        this.month = month
        this.day = day
    }
}
const date1 = new DateClass(2020, 5, 21)
console.log(date1)


// simplified class //
class DateClass2 {
    constructor(
        public year: number = 1970,
        public month: number = 0,
        public day: number = 0
    ) {}
}
const date2 = new DateClass2(2020, 5, 21)
console.log(date2)


// challenge1 //
class Product {
    constructor(
        public name: string,
        public price: number,
        public discount: number = 0
    ) {}

    summary(): string {
        return `Name: ${this.name}, Price: ${this.finalPrice()}, Discount: ${this.discount * 100}%`
    }

    finalPrice(): number {
        return this.price * (1 - this.discount)
    }
}
const prod1 = new Product('prod1', 10.0, 0.5)
const prod2 = new Product('prod2', 20.0)
console.log(prod1.summary())


// access modifiers //
class Car {
    private currentSpeed: number = 0

    constructor(
        public brand: string,
        public model: string,
        public year: number,
        protected maxSpeed: number = 200
    ) {}

    protected updateSpeed(delta: number): number {          // protected -> available inside the class and the child's classes
        const updatedSpeed = this.currentSpeed + delta

        if(updatedSpeed >= 0 && updatedSpeed <= this.maxSpeed)
            this.currentSpeed = updatedSpeed
        else
            this.currentSpeed = delta > 0 ? this.currentSpeed : 0
        
        return this.currentSpeed
    }

    public speedUp() { 
        return this.updateSpeed(5)
    }

    public speedDown() {
        return this.updateSpeed(-5)
    }
}

const car1 = new Car('Ford', 'Ka', 2000, 220)
Array(10).fill(0).forEach(() => console.log(car1.speedUp()))
Array(5).fill(0).forEach(() => console.log(car1.speedDown()))

// inheritance //
class Porsche extends Car {
    constructor(
        model: string,
        year: number,
        maxSpeed: number = 200) {
            super('Porsche', model, year, maxSpeed)
        }
        
    public speedUp() { 
        return this.updateSpeed(20)
    }

    public speedDown() {
        return this.updateSpeed(-15)
    }
}

const porsche = new Porsche('911', 2020, 450)

// getter & setter //
class Child {
    private _age: number = 0

    get age(): number {
        return this._age
    }

    set age(value: number) {
        if(value >= 0 && value < 10)
            this._age = value
    }
}

const child = new Child
child.age = 5
console.log(child)

// static members //
class Geometry {
    static PI: number = 3.1416

    static circleArea(radius: number): number {
        return Geometry.PI * radius * radius
    }
}
console.log(Geometry.circleArea(2))

// abstract class //
abstract class Calculate {
    protected result: number = 0

    abstract execute(...numbers: number[]): void
    
    getResult(): number {
        return this.result
    }
}

class Sum extends Calculate {
    execute(...numbers: number[]): void {
        this.result = numbers.reduce((prev, curr) => prev + curr)
    }
}

class Multiply extends Calculate {
    execute(...numbers: number[]): void {
        this.result = numbers.reduce((prev, curr) => prev * curr)
    }
}

const sum: Calculate = new Sum()
const multiply: Multiply = new Multiply()
sum.execute(1, 2, 3, 4, 5)
multiply.execute(1, 2, 3, 4, 5)
console.log(`Sum: ${sum.getResult()}`)
console.log(`Multiply: ${multiply.getResult()}`)

// singleton //
class Unique {
    private static instance: Unique = new Unique
    private constructor() {}

    static getInstance(): Unique {
        return Unique.instance
    }

    anotherMethod(): string {
        return 'Another method'
    }
}
console.log(Unique.getInstance().anotherMethod())

// readonly //
class Bike {
    constructor(public readonly model: string){}
}

const bike = new Bike('Canadian')
// bike.model = 'test'                      -> throws error
console.log(bike)
