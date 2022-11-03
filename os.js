//Uso del modulo OS

const os = require('os') //Modulo que permite traerme informacion a traves del SO.

console.log(os.userInfo()) //Info del usuario 
console.log(os.uptime()) //Tiempo que lleva la pc encendida, en segs.
console.log(os.platform()) //Me da el sistema op en el que estoy ejecutando node.
console.log(os.totalmem()) //Memoria total que tengo en la pc (RAM)
console.log(os.freemem()) //Memoria libre en mi pc

console.table({
    os: os.platform(),
    version: os.release(),
    totalMemory: os.totalmem()
})