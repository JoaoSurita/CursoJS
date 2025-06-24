let a = 4
console.log(a)

//Function Declaration
function bomDia() {
    console.log('Bom dia!')
}

bomDia()

//Function Expression
const boaTarde = function () {
    console.log('Boa Tarde!')
}

let x = boaTarde() //undefined

function somar(a, b) {
    return a + b
}

let resultado = somar(3, 4)
console.log(resultado)

resultado = somar(3, 5, 5, 6, 8)
console.log(resultado)

resultado = somar(3)
console.log(resultado)