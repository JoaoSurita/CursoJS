//arrow function
const felizNatal = () => console.log('FelizNatal!')
felizNatal()

const saudacao = nome => 'Fala ${nome}, blz?!?'
console.log(saudacao('Maria'))

const somar = numeros => {
    let total = 0
    for(let n of numeros) {
        total += n
    }
    return total
}

console.log(somar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

const potencia = (base) => exp => Math.pow(base, exp)

console.log(potencia(2)(8))

//this
Array.prototype.ultimo = function() {
    console.log(this[this.length - 1])
}

const numeros = [1, 2, 3]
numeros.ultimo()