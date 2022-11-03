const myWebAdress = "faztweb.com" //puedo guardar cualquier cosa.
const myNumber = 30
const myArray = [10,20,30]
const user = {
    name: 'Homero',
    lastName: 'Gelves'
}

const group = {
    myWebAdress : myWebAdress,
    myNumber : myNumber,
    myArray : myArray,
}

//Otra manera de exportar es mediante export individuales

// module.exports.myNumber = myNumber
// module.exports.myArray = myArray
// module.exports.user = user


//Tambien puedo exportar las variables en forma de objeto directamente.

module.exports = group

//console.log(module) //en exports va a aparecer el valor de myWebAdress.