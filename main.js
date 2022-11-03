const web = require('./module/myModule') //Puedo desestructurar con {} y traerme valores especificos. {myArray, myNumber...}
const {add, divide, multiply, substract} = require('./math/index')


console.log(web) //Lo que se exporte en myModule.
// console.log(math)

console.log(add(10,20))
console.log(divide(10,20))
console.log(multiply(10,20))
console.log(substract(10,20))
