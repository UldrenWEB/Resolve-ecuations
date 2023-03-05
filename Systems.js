'use strict'

class Matrix {
    constructor(dimension) {

        this.dimension = dimension;
        this.matrix = [];
        this.diagonal =[];



        //Creando la matriz 
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                this.matrix[i] = new Array();
            }
        }
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                this.matrix[i][j] = 0;

            }
        }

        //Sacando la diagonal

    //     for (var i = 0; i < this.dimension; i++) {
    //         for (var j = 0; j < this.dimension; j++) {
    //             if (i == j) {
    //                 this.diagonal = this.matrix[i][j];
                
    //             // console.log(this.diagonal)
    //         }
    //     }


    // }
    }
    

    sacarDiagonal() {
        
        for (var i = 0; i < this.dimension; i++) {
            for (var j = 0; j < this.dimension; j++) {
                if (i == j) {
                    this.diagonal = this.matrix[i][j];

                    
                }
            }
        }

    }
}


// crearMatriz(dim) {
//     for (var i = 0; i < dim; i++) {
//         for (var j = 0; j < dim; j++) {
//             this.matrix[i] = new Array();
//         }
//     }
//     for (var i = 0; i < dim; i++) {
//         for (var j = 0; j < dim; j++) {

//             this.matrix[i][j] = 0;
//         }
//     }

// }


var a = parseInt(prompt("Introduce la dimension de la matriz"))

const matrizA = new Matrix(a)
matrizA.sacarDiagonal();
// matrizA.matrizInversa();
// var diagonal = matrizA.sacarDiagonal(dimension);
console.log(matrizA)