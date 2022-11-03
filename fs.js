//FS = File System, con diferentes metodos me permite trabajar con archivos, leerlos, crearlos, eliminarlos, etc..

const fs = require('fs')

//LECTURA DE ARCHIVOS

//const first = fs.readFileSync('./data/first.txt', "utf-8") //Lee el archivo dependiendo la ruta que le pase., lo paso a utf 8 para que me lo muestre como string.
//const second = fs.readFileSync('./data/second.txt')

//console.log(first)
//console.log(second.toString())

//CREACION DE ARCHIVOS

//fs.writeFileSync('./data/third.txt', "Hola, archivo creado.")  //Recibe una ruta donde va a crear el archivo.
//fs.writeFileSync('./data/third.txt', "Esto es texto añadido.", {
    flag:'a' //a significa append, es decir, añadir.
//})

//Escribo lo mismo pero de manera Asincrona, ya que el codigo de arriba esta escrito de manera Sincrona.

fs.readFile('./data/first.txt', 'utf-8',(error, data)=>{
    if(error){
        console.log(error)
    } console.log(data)

    fs.readFile('./data/second.txt', 'utf-8',(error, data)=>{
        if(error){
            console.log(error)
        } console.log(data)

        fs.writeFile('./data/fourth.txt', 'Cuarto archivo creado desde un metodo asincrono', 'utf-8', (error, data)=>{
            if(error){
                console.log(error)
            } console.log(data)
        })
    })
})
