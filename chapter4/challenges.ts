// challenge1 //
class Motorcycle {
    private _speed: number = 0

    constructor(public model: string) {}

    honk(): void {
        console.log('Toooooot!')
    }

    speedUp(delta: number): void {
        this._speed = this._speed + delta
    }

    get speed(): number {
        return this._speed
    }
}
const motorcycle = new Motorcycle('XJ6')
motorcycle.honk()
console.log(motorcycle.speed)
motorcycle.speedUp(30)
console.log(motorcycle.speed)

// challenge2 //
abstract class Object2D {
    constructor(
        public height: number,
        public width: number
    ) {}

    abstract area(): number
}

class Rectangle extends Object2D {
    area(): number {
        return this.height * this.width
    }
}
const rectangle = new Rectangle(10, 5)
console.log(rectangle.area())

// challenge3 //
class Intern {
    constructor(
        private _firstName: string
    ) {}

    get firstName(): string {
        return this._firstName
    }

    set firstName(value: string) {
        if(value.length >= 3)
            this._firstName = value
        else
            this._firstName = ''
    }
}

const intern = new Intern('Joao')
console.log(intern.firstName)
intern.firstName = 'Jo'
console.log(intern.firstName)
intern.firstName = 'Joao'
console.log(intern.firstName)