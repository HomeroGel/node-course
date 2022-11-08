//Modulo HTTP, para poder crear servidores web con node.

//Modulos que funcionan como CLI (common line interface) o programas de consolas.

//Modulo Serve + (carpeta donde ejecutar el modulo), sirve para crear un server

const http = require('http')

const server = http.createServer(function (req, res) {
    console.log(req.url)

    if (req.url === "/about") {
        res.write("<h1>Acerca de:</h1>")
        return res.end()
    }

    if (req.url === "/") {
        res.write("<h1>Welcome to the server</h1>")
        return res.end()
    }

    res.write(`<h1>Not Found</h1>
        <p>Hola este es un parrafo</p>
        <a href="/">Volver a la pagina principal</a>
    `)
    res.end()
})

server.listen(3000) //Escuchar este server en el puerto 3000.

console.log("Servidor corriendo en el puerto 3000.")