/********************************
 ****  CHAPTER 7 - GENERICS  ****
 ********************************/

function echo(obj: any): any {
    return obj
}

console.log(echo('oi').length)                      // print '2'
console.log(echo(2).length)                         // print undefined

function echoImproved<T>(obj: T): T {
    return obj
}

console.log(echoImproved('oi').length)              // print '2'
console.log(echoImproved<number>(2))
// console.log(echoImproved(2).length)              -> ERROR


const nums: Array<number> = [2, 4, 6]
nums.push(10)
// nums.push('10')                                  -> ERROR
console.log(nums)


// Array Type //
function printGeneric<T>(args: T[]) {
    args.forEach(item => console.log(item))
}
printGeneric([1,2,3])
// print<number>([1,2,3])
printGeneric(['1','2','3'])
// print<string>(['1','2','3'])

type Student = { name: string, age: number }
printGeneric<Student>([
    {name: 'joao', age: 22},
    {name: 'maria', age: 23},
    {name: 'bob', age: 24}
])


// Function Type //
type Echo = <T>(data: T) => T
const callEcho: Echo = echoImproved
console.log(callEcho<string>('Joao'))


// Classes //
abstract class Operation<T, U> {
    constructor(
        public op1: T,
        public op2: T
    ) {}

    abstract execute(): U
}

class SumOperation extends Operation<number, number> {
    execute() {
        return this.op1 + this.op2
    }
}

class DateOperation extends Operation<Date, string> {
    execute() {
        let diff = Math.abs(this.op2.getTime() - this.op1.getTime())
        let day = 1000 * 60 * 60 * 24
        return `${Math.ceil(diff / day)} days`
    }
}

const d1 = new Date(2020, 5, 6)
const d2 = new Date()
console.log(new DateOperation(d1, d2).execute())

// challenge //
class Queue<T> {
    private queue: Array<T>

    constructor(...args: Array<T>) {
        this.queue = args
    }

    push(item: T) {
        this.queue.push(item)
    }

    pop(): T | null {
        if(this.queue.length > 0) {
            const first = this.queue[0]
            this.queue.splice(0, 1)
            return first
        } else {
            return null
        }
    }

    print() {
        console.log(this.queue)
    }
}
console.log('QUEUE')
const queue = new Queue<number>(1, 2, 3, 4)
queue.print()
queue.push(2)
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
queue.print()


// challenge2 //
type MapType<T, U> = { key: T, value: U }
class MapChallenge<T, U> {
    private items: Array<MapType<T, U>> = new Array<MapType<T, U>>()

    get(key: T): MapType<T, U> | null {
        let item = this.items.filter(i => i.key === key)

        return item ? item[0] : null
    }

    putOrUpdate(item: {key: T, value: U}) {
        const found = this.get(item.key)
        if(found) 
            found.value = item.value
        else
            this.items.push(item)
    }

    clear() {
        this.items = new Array<MapType<T, U>>()
    }

    print() {
        this.items.map(item => console.log(item))
    }
}

const map = new MapChallenge<number, string>()
map.putOrUpdate({key: 1, value: 'joao'})
map.putOrUpdate({key: 2, value: 'pedro'})
map.putOrUpdate({key: 3, value: 'maria'})
map.putOrUpdate({key: 1, value: 'bob'})

console.log(map.get(2))
map.print()
map.clear()
map.print()