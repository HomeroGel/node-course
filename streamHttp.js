const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res)=>{
    const fileStream = fs.createReadStream('./data/bigFile.txt', {
        encoding: 'utf-8'
    })

    fileStream.on('data', (chunk)=>{
        fileStream.pipe(res)  //pipe seria como decir le voy a pasar un dato, a otra funcion. en este caso, al objeto res.
    })

    fileStream.on('error', error =>{
        console.log(error)
    })
})

server.listen(3000)
console.log(`server on port ${3000}`)