'use strict'

//Primeros pediremos la matriz A
// var row1 = new Array()
// var row2 = new Array()
// var row3 = new Array()
// var matrizA = new Array(row1, row2, row3);
// var grado = parseInt(prompt("Diga de que grado sera el sistema de ecuaciones"))

// let i = 0;
// while (i < grado) {
//     var fila1 = parseInt(prompt("Introduzca los datos de la matriz A, fila 1"));
//     row1.push(fila1)
//     i++;
// }

// let j = 0
// while (j < grado) {
//     var fila2 = parseInt(prompt("Introduzca los datos de la matriz A, fila 2"));
//     row2.push(fila2)
//     j++;
// }

// let m = 0;
// while (m < grado) {
//     var fila3 = parseInt(prompt("Introduzca los datos de la matriz A, fila 3"));
//     row3.push(fila3)
//     m++;
// }

var cantidad = parseInt(prompt("Introduce la cantidad de filas y columnas que tendra la matriz"))

var matrizA = new Array(cantidad)

for (var i = 0; i < cantidad; i++) {
    for (var j = 0; j < cantidad; j++){
        matrizA[i] = new Array(j)
    }
        
}
for (var i = 0; i < cantidad; i++) {
    for (var j = 0; j < cantidad; j++){
        
    }
        matrizA[i][j] = parseInt(prompt(`Introduce los elementos de la matriz en la posicion de la fila ${i + 1} y columna ${j + 1}`))
}

//Diagonal principal de la matriz
var suma;
var cont = 0;
for (var i = 0; i < cantidad; i++) {
    suma = 0;
    for (var j = 0; j < cantidad; j++) {
        if (i == j){
            var diagonal = matrizA[i][j];
            console.log(diagonal)
        } else {
            suma += matrizA[i][j];
            document.write(suma)
        }
        
    }
    if(diagonal > suma){
        cont++;
    }
}
if(cont == cantidad){
    alert('La matriz es diagonalmente dominante')
}else{
    alert('La matriz no es diagonalmente dominante, cambie el orden del sistema de ecuaciones')
}
console.log(matrizA)


