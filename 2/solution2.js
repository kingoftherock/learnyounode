//Declaro una variable para guardar mi resultado
var result = 0 

for (i = 2; i < process.argv.length; i++) {
	//Realizo la suma el mismo número de veces que número de parámetros que le paso
	//Tomo el valor de mi arreglo en cada posición para sumarlo y guardarlo en result
	result += Number(process.argv[i])
}
//imprimo result con un console.log()
console.log(result)