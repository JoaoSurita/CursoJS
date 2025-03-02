//range function

function range(a, b, s) {
    const nums = []
    for(let i = 1; i <= a; i++) {
        nums.push(i)
    }
    return nums
}
console.log(range(5))

function range(a, b, s) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const nums = []
    for(let i = n1; i <= n2; i++) {
        nums.push(i)
    }
    return nums
}
console.log(range(6, 11))

function range(a, b, s = 1) {
    const n1 = b === undefined ? 1 : a
    const n2 = b === undefined ? a : b
    const nums = []
    for(let i = n1; i <= n2; i += s) {
        nums.push(i)
    }
    return nums
}
console.log(range(10, 19, 2))