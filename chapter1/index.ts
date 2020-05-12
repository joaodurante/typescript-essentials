/*******************************
 *****  CHAPTER 1 - TYPES  *****
 *******************************/


// string //
let str = 'joao'                    // == str: string = 'joao'
console.log(str)

// number // 
let num = 12                        // == num: number = 12
console.log(num)
num = 2.5
console.log(num)

// boolean //
let bool = true                     // == bool: boolean = true
console.log(bool)

// explicit //
let var1 = 1                        // var1: number
let var2                            // var2: any
var2 = 1
var2 = 'str'
var2 = true

// array //
let arr = ['joao', 'maria']         // == arr: string[] = ['joao', 'maria']
console.log(arr)

// tuple //
let tuple: [string, number] = ['joao', 22]
console.log(tuple)

// enum //
enum Color { Red, Green, Blue }
let color: Color = Color.Blue
console.log(color)

// any //
let any: any = 12
any = { color: Color.Blue, name: 'Blue' }
console.log(any)

// function //
function foo(age: number): string {
    return `Hello! I'm ${age}.`
}
console.log(foo(12))

// function type //
let bar: (x: number) => string

bar = (age: number): string => {
    return `Hello! I'm ${age}`
}
console.log(bar(22))

// object //
let obj: { name: string, age: number } = {
    name: 'joao',
    age: 22
}
console.log(obj)

// challenge //
let employee: {
    supervisors: string[],
    checkSchedule: (hour: number) => string
} = {
    supervisors: ['joao', 'maria'],
    checkSchedule(hour: number): string {
        if (hour <= 8) return 'Normal schedule'
        else return 'Behind schedule'
    }
}
console.log(employee)
console.log(employee.checkSchedule(12))

// custom type (alias) //
type Employee = {
    supervisors: string[],
    checkSchedule: (hour: number) => string
}

let employee2: Employee = {
    supervisors: ['joao', 'maria'],
    checkSchedule(hour: number): string { return 'str' }
}

// union //
let union: number | string
union = 10
union = '10'
console.log(union)

// never //
function fail(): never {
    // returning 'never' implicates the function is an infinite loop or throws some error
    // while(true)
    throw new Error('Some error message')
}
if(union !== '10') fail()

// null //
type Person = {
    name: string,
    phone: string | null
}
let person: Person = { name: 'joao', phone: null }
console.log(person)

// challenge2 //
type BankAccount = {
    budget: number,
    deposit: (value: number) => void
}

type AccountHolder = {
    name: string,
    bankAccount: BankAccount,
    phones: string[]
}

let bankAccount: BankAccount = {
    budget: 2000,
    deposit(value) {
        this.budget += value
    }
}

let accountHolder: AccountHolder = {
    name: 'joao',
    bankAccount: bankAccount,
    phones: ['19988504771']
}

accountHolder.bankAccount.deposit(2000)
console.log(accountHolder)