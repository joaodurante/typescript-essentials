/********************************
 ***  CHAPTER 8 - DECORATORS  ***
 ********************************/


// decorators is always called when the class is loaded //
//  @logClass
@logClassFactory(true)
class DecoratorClass {
    constructor() {
        console.log('test')
    }
}

function logClass(constructor: Function) {
    console.log(constructor)
}

function emptyDecorator(_: Function) {}

// factory (returns a decorator) //
function logClassFactory(value: boolean) {
    return value ? logClass : emptyDecorator
}

/**
 * A decorator needs as a parameter an object including a constructor. 
 * This object can instantiate different classes, that is why you have to use a generic function. 
 * That is why you need a function which looks like this function classDecorator<T>(constructor:T) {} 
 * Where the T is replacing by a class or a type. for example, you can call the function like this: classDecorator<MyClass>(myClass)
 * 
 * In order to restrict the type classes that classDecorator can use, you specify it after the extends: extends {new(...args:any[]):{}. 
 * You are basically saying that your class need a constructor in its definition through this (new...).
 */

type Constructor = { new(...args: any[]): {} }                  // most generic constructor possible
function logObject(constructor: Constructor) {
    return class extends constructor {
        constructor(...args: any[]) {
            console.log('before')
            super(...args)
            console.log('after')
        }
    }
}

@logObject
@logClassFactory(true)                                          // multiple decorators
class DecoratorClass2 {
    constructor() {
        console.log('DecoratorClass2')
    }
}

new DecoratorClass2()


// challenge //
const loggedUser ={
    name: 'Joao',
    email: 'jaodurante@gmail.com',
    admin: true
}

@adminProfile
class AdminUpdate {
    critical() {
        console.log('Something critical has been changed')
    }
}

function adminProfile<T extends Constructor>(constructor: T) {
    return class extends constructor {
        constructor(...args: any[]) {
            super(...args)

            if(!loggedUser || !loggedUser.admin)
                throw new Error('You are not an administrator')
        }
    }
}

new AdminUpdate().critical()


// method decorator //
class Account {
    @notNegative
    private total: number

    constructor(total: number) {
        this.total = total
    }


    withdraw(@paramInfo amount: number): boolean {
        if(amount <= this.total) {
            this.total -= amount
            return true
        } else {
            return false
        }
    }

    @freeze                                 // prevents method changes
    getTotal(): number {
        return this.total
    }
}

const account = new Account(2000)
console.log(account.getTotal())
console.log(account.withdraw(3000))
console.log(account.getTotal())

function freeze(target: any, methodName: string, descriptor: PropertyDescriptor) {
    descriptor.writable = false
}

function notNegative(target: any, propertyName: string) {
    delete target[propertyName]
    Object.defineProperty(target, propertyName, {
        get: function(): any {
            return target['_' + propertyName]
        },
        set: function(value: any) {
            if(value < 0) {
                throw new Error('Invalid value')
            } else {
                target['_' + propertyName] = value
            }
        }
    })
}

function paramInfo(target: any, methodName: string, paramIndex: number) {
    console.log(`param ${target}, ${methodName}, ${paramIndex}`)
}
