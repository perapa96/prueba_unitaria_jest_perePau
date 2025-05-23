// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)



// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD;
}


const fromDollarToYen = (dollar) => {
    return (dollar / oneEuroIs.USD) * oneEuroIs.JPY
}


const fromYenToPound = (yen) => {
    return (yen / oneEuroIs.JPY) * oneEuroIs.GBP
}


module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound};