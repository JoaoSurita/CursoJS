function finalPrice(tax) {
    return function(price) {
        return price * (1 + tax)
    }
}

const nycfinalPrice = finalPrice(0.0875)

console.log(nycfinalPrice(25.1))
console.log(nycfinalPrice(29.9))
console.log(nycfinalPrice(120.6))