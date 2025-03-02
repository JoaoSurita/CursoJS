function logParams (a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2)
logParams(1, 2, 3)
logParams(1, 2, 3, 4)

function defaultParams (a, b, c = 6) {
    console.log(a, b, c)
}

defaultParams(4, 5)
defaultParams(4)

function sumAll(...nums) {
    let total = 0
    for(let n of nums) {
        total += n
    }
    return total
}

console.log(sumAll(1, 2, 3))
