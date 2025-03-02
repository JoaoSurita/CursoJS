//Anonymous Function
//IIFE - Immediately Invoked Function Expressin
(function (a, b, c) {
    let x = 3
    console.log(`Result : ${a + b + c}`)
    console.log(x)
})(1, 2, 3);

(function (a, b, c) {
    let x = 500
    console.log(`Result : ${a + b + c}`)
    console.log(x)
})(2, 4, 6);

(() => {
    console.log('arrow #1')
})()