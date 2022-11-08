//Me ayudan a enviar o dividir un archivo grande para que pueda ser transmitido facilmente

// const {writeFile} = require('fs/promises')

// const createBigFile = async ()=>{
//     await writeFile('./data/bigFile.txt', 'Hello world'.repeat(10000), 'utf-8')
// }

// createBigFile()

const {createReadStream} = require('fs') // Al estar basado en eventos, esto se ejecuta luego de que pase cierto evento.

const stream = createReadStream('./data/bigFile.txt', 'utf-8') //Esto me devuelvo un objeto con manejadores de eventos.

stream.on("data", (chunk)=>{
    console.log(chunk)
})

stream.on('end', ()=>{
    console.log("Ya termine de leer el archivo")
})

stream.on('error', (error)=>{
    console.log(error)
})