'use strict'

import Matrix from "./Systems.js"


const btn = document.querySelector(".dim-btn")
const dimN = document.querySelector(".dimN");
const containerMatriz = document.querySelector(".containerMatriz")
const containerResults = document.querySelector(".containerResults")

let valorN;

btn.addEventListener('click', () => {
    if (isNaN(dimN.value)) {
        alert("Ingrese un numero valido")
        dimN.value = " ";
    } else {

        valorN = +dimN.value;

        containerMatriz.style.gridTemplateRows = `repeat(${valorN},1fr)`

        containerMatriz.style.gridTemplateColumns = `repeat(${valorN + 1}, 2.3rem)`

        // Para crear los inputs dentro del container
        for (let i = 0; i < valorN; i++) {
            for (let j = 0; j < valorN + 1; j++) {

                if (j == valorN) {
                    var input1 = document.createElement("input")

                    input1.classList.add("input1")
                    input1.placeholder = `X${i + 1}`;
                    containerMatriz.appendChild(input1)
                } else {

                    let input = document.createElement("input")
                    input.classList.add("input")
                    input.placeholder = ` `;
                    containerMatriz.appendChild(input)
                }

            }
        }







        document.querySelector(".resultado").addEventListener("click", () => {


            //Aqui sacamos los terminos independientes y los metemos en un arreglo para poder trabajar con ellos 

            let independientes = []

            let terminos = document.querySelectorAll(".input1")

            terminos.forEach((cadaTermino, i) => {
                let termIndep = Number(cadaTermino.value)

                independientes.push(termIndep);
            })

            console.log(independientes)



            // Esto es para sacar los datos que ingrese el usuario en los inputs

            let todosLosInputs = document.querySelectorAll(".input")
            let vector = []

            todosLosInputs.forEach((cadaInput, i) => {
                let valores = Number(cadaInput.value)

                vector.push(valores)


            });

            console.log(vector)

            let pasar = [];
            for (let i = 0; i < valorN; i++) {
                for (let j = 0; j < valorN; j++) {
                    pasar[i] = new Array();
                }
            }

            let m = 0;
            for (let i = 0; i < valorN; i++) {
                for (let j = 0; j < valorN; j++) {
                    pasar[i][j] = vector[m]
                    m++;
                }
            }
            console.log(pasar);


            //Aqui instanciamos la clase que importamos a este archivo

            let matrizA = new Matrix(valorN)
            matrizA.sacarArray(pasar)
            matrizA.sacarUnos()
            matrizA.sacarIndpendientes(independientes)
            let hola = matrizA.sacarCoeficientes()

            console.log(matrizA);

            for (let i = 0; i < valorN; i++) {

                let Rcoeficientes = document.createElement("div")

                if (isNaN(hola[i])) {
                    Rcoeficientes.innerHTML = `X${i} = ${hola[i]}`
                } else {
                    Rcoeficientes.innerHTML = `X${i} = ${hola[i].toFixed(2)}`

                }
                Rcoeficientes.classList.add("resultados")
                containerResults.appendChild(Rcoeficientes)


            }



        })
    }

})








