var fs = require('fs')
var file = process.argv[2]

//Ahora repito el proceso anterior, sólo que está vez uso una función la cual recibe el parámetro contents que es el contenido, mi archivo 
//en buffer para después repetir el proceso anterior y obtener su número de líneas
fs.readFile(file, function (err, contents) {
  var total = contents.toString().split('\n').length - 1
  console.log(total)
})