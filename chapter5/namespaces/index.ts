/*******************************
 **  CHAPTER 5.1 - NAMESPACE  **
 *******************************/

 // simple namespace //
namespace Area {
    const PI = 3.14

    export const circumference = (radius: number): number => {
        return PI * radius * radius
    }

    export const rectangle = (height: number, width: number): number => {
        return height * width
    }
}

console.log(Area.circumference(10))
console.log(Area.rectangle(5, 2))

// nested namespace //
namespace Geometr {
    const PI = 3.14

    export namespace Area {
        export const circumference = (radius: number): number => {
            return PI * radius * radius
        }

        export const rectangle = (height: number, width: number): number => {
            return height * width
        }
    }
}

console.log(Geometr.Area.circumference(10))
console.log(Geometr.Area.rectangle(5, 2))

// splitted namespace using reference //
///<reference path="splittedAreaC.ts" />
///<reference path="splittedAreaR.ts" />

console.log(SplittedArea.circumference(10))
console.log(SplittedArea.rectangle(5, 2))

