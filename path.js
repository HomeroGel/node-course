//Modulo Path, permite trabajar con carpetas y archivos y conocer sus direcciones.

const path = require('path')

const filePath = path.join("users", "homer", "node", "pathsClass") //Me crea una ruta uniendo todos los strings.
console.log(path.basename(filePath)) //Me devuelve la direccion base, en este caso "pathsClass".
console.log(path.dirname(filePath)) //Me devuelve el directorio del archivo (pathsClass)\
console.log(path.parse(filePath))//Me devuelve la misma info pero en objeto.
console.log(path.resolve("dist"))//Me completa todas las rutas anteriores a dist, va a comenzar por c//users....