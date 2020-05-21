/*******************************
 ***  CHAPTER 3 - ES AND TS  ***
 *******************************/


 // let & const //
 let let1 = 12                  // let has no hoisting as var
 let1 = 13
 console.log(let1)

 const const1 = 12
//  const1 = 13                    generates error
console.log(const1)

function fun1(){
    if(true){
        const const2 = 2
        let let2 = 2
        var var2 = 2
    }
    console.log(var2)
    // console.log(const2)      // generates error
    // console.log(let2)        // generates error
}


// arrow function //
const arrow1 = (num: number): number => num * num
const arrow2 = (num: number): number => {
    return num * num
}

// this //
// function f1(){ console.log(this) }
// f1()

// const f1Bind = f1.bind(5)
// f1Bind()

// console.log(this)                       // equals to f2 this
// const f2 = () => console.log(this)
// f2()

// default params //
const f3 = (num: number = 10) => console.log(num)
f3()

const f4 = (num1: number = 10, num2: number = num1 - 5) => {
    console.log(num1)
    console.log(num2)
}

f4()

// spread & rest //
const numbers: number[] = [1, 20, 3, 40, 5]
// console.log(Math.max(numbers))       // generates error, the function expects the numbers as params Math.max(1, 20, 3, 40, 5)
console.log(Math.max(...numbers))      

const names1: string[] = ['joao', 'maria', 'jose']
const names2: string[] = ['bob', 'will', ...names1] 
console.log(names2)

// rest //
const arrNum = (...args: number[]) => args
console.log(arrNum(1, 2, 3, 4, 5))
console.log(arrNum(...numbers))         // spread the params and then rest into an array

// spread & rest using tuples //
const tuple1: [number, string, boolean] = [1, 'joao', false]
const tupleFun1 = (num: number, str: string, bool: boolean) => {
    console.log(`${num} ${str} ${bool}`)
}
tupleFun1(...tuple1)

const tupleFun2 = (...params: [number, string, boolean]) => {
    console.log(`${params[0]} ${params[1]} ${params[2]}`)
}
tupleFun2(1, 'joao', false)

// destructuring (array) //
const fullName = ['Joao', 'Durante']
const [firstName, lastName] = fullName
console.log(`${firstName} ${lastName}`)

// destructuring (obj) //
const objTest = {
    atr1: 10,
    atr2: 'abc',
    atr3: {
        atr3_1: true
    }
}

const { atr1, atr2, atr3: { atr3_1 } } = objTest
console.log(`${atr1} ${atr2} ${atr3_1}`)

const { atr1: a1, atr2: a2, atr3: { atr3_1: a3_1 } } = objTest
console.log(`${a1} ${a2} ${a3_1}`)

// template string //
const value = 10
const normalString1 = 'Value: ' + 10 + '!!'
const templateString1 = `Value: ${value}!!`
console.log(templateString1)

// challenge1 //
const double = (value: number): number => value * 2
console.log(double(10))

// challenge2 //
const sayHello = (name: string = 'Friend'): void => {
    console.log(`Hello ${name}`)
}
sayHello()

// challenge3 //
const nums3: number[] = [-3, 33, 38, 5]
console.log(Math.min(...nums3))

// challenge4 //
const nums4: number[] = [55, 20]
nums4.push(...nums3)

// challenge5 //
const grades = [8.5, 6.3, 9.4]
const [ grade1, grade2, grade3 ] = grades
console.log(`${grade1} ${grade2} ${grade3}`)

// challenge6 //
const scientist = { firstName: 'Will', experiment: 12 }
const { 
    firstName: scientistName,
    experiment: scientistExperiment
} = scientist
console.log(`${scientistName} ${scientistExperiment}`) 

// callback //
const wait3Callback = (callback: (data: string) => void) => {
    setTimeout(() => {
        callback('Data after 3 seconds using callback')
    }, 3000)
}

wait3Callback((data: string) => {
    console.log(data)
})

// promises //
const wait3Promise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data after 3 seconds using promises')
        }, 3000)
    })
}
wait3Promise().then(data => console.log(data))

fetch('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => res.json())
    .then(parsed => parsed.data)
    .then(employees => employees[0])
    .then(employee => console.log(employee.employee_name))
    .catch(e => console.error('Failed to fetch!'))