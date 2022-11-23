function coloret () {
    let boton = document.getElementById("botonColor");
    let body = document.getElementsByTagName("body")[0];
    if (boton.style.backgroundColor == "white") {
        boton.style.backgroundColor = "red";
        body.style.backgroundColor = "white";
    }
    else if (boton.style.backgroundColor == "red"){
        boton.style.backgroundColor = "white";
        body.style.backgroundColor = "red";
    }
}

// function coloret2 () {
//     let boton = document.getElementById("botonColor");
//     let cuenta = 0;
//     if (boton.style.backgroundColor == "white") {
//         boton.style.backgroundColor = "red";
//         cuenta++;
//     }
//     else if (boton.style.backgroundColor == "red"){
//         boton.style.backgroundColor = "white";
//     }
// }


function multiplicacion () {
    let input = document.getElementsByTagName("input")[0].valueAsNumber;
    let resultado = 1;
    for (let x = input; x > 0; x--) {
        resultado = resultado * x;
    }
    console.log(resultado);
}


function mediaImpares () {
    let valores = [3,5,6,4,7,1];
    let media = 0;
    for (let x = 1; x < valores.length-1; x+=2) {
        media = media + valores[x];
    }
    console.log(media/(valores.length/2));
}

function invertirLista () {
    let lista = [1,2,3,4,5];
    let listaInvertida = [];
    for (let x = 0, z = lista.length-1; x < lista.length; x++, z--) {
        listaInvertida[x] = lista[z];
    }
    console.log(listaInvertida);
}



let rows = document.querySelector("tbody").children
let matrix = []
for (var i = 0; i < rows.length; i++) {
    matrix.push(rows[i].children)
}

function pintaQuadrant() {
    for (let i = matrix.length/2; i < matrix.length; i++ ) { // filas
        for (let j = 0; j < matrix[i].length/2; j++) { // columnas
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}

function pintaDiagonals() {
    // for (let i = 0; i < matrix.length; i++) { 
    //     for (let j = i; j < matrix[i].length; j+=3) { 
    //         matrix[i][j].style.backgroundColor = "red";
    //     }
    // }

    for (let i = 0; i < matrix.length; i++) { // filas
        for (let j = i; j >= i; j-=3) { // columnas
            matrix[i][j].style.backgroundColor = "red";
        }
    }
}