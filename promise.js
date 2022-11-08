//Hacer lo mismo que en el archivo fs.js pero con mejores practicas, es decir, mediante una promesa.

const { readFile, writeFile } = require('fs/promises')
//en vez de importar promisify, fs/promises hace lo mismo.
//const {promisify} = require('util')  //Modulo que me sirve para trabajar con promesas sin tener que escribir el codigo de la funcion getText.

//Usando promisify

//const readFilePromise = promisify(readFile)


//Funcion que ejecuta codigo asincrono
function getText(pathFile) {
    return new Promise(function (resolve, reject) {
        readFile(pathFile, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }

            resolve(data)
        })
    })
}

//funcion para crear un archivo.

function writeNewFile(path, content) {
    return new Promise(function (resolve, reject) {
        writeFile(path, content, 'utf-8', (err, data) => {
            if (err) {
                reject(err)
            }

            resolve(data)
        })
    })
}

async function readNewFile() {
    const result = await writeNewFile('./data/seventh.txt', 'archivo creado con funcion asincrona', 'utf-8',{
        flag:"a"
    })
    console.log(result)
}

//Si bien lo que devuelve es undefined, se crea el archivo correctamente con su contenido.

//---------------- Archivo creado----------//

// getText('./data/first.txt')
//     .then(res => console.log(res))
//     .catch(err => console.log(err))

async function read() {
    try {
        // const result = await readFilePromise('./data/second.txt', 'utf-8') ejemplos con promisify
        // const result2 = await readFilePromise('./data/fourth.txt', 'utf-8')
        const result = await readFile('./data/second.txt', 'utf-8')
        const result2 = await readFile('./data/fourth.txt', 'utf-8')
        console.log(result)
        console.log(result2)
    } catch (error) {
        console.log(error)
    }
}

read()
//readNewFile()