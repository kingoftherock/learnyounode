var fs = require('fs')

//Guardo el buffer que me manda el leer el archivo
var buf = fs.readFileSync(process.argv[2])

//Convierto en una cadena de texto el Buffer que me devuelve para después pasarlo a un arreglo y encontrar todos los "\n"
//los cuales son saltos de línea y así contarlos en base a la longitud del arreglo
//el cual imprimo al final
var total = buf.toString().split('\n').length - 1
console.log(total)