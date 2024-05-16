
alert('Por favor, introduzca sus notas');
let notaUno = parseInt(prompt('Introduce la primera nota'));
let notaDos = parseInt(prompt('Introduce la segunda nota'));
let notaTres = parseInt(prompt('Introduce la tercera nota'));
let notas = [notaUno, notaDos, notaTres];

function calcularPromedio(notas) {
    let sumaNotas = 0;
    for (let i = 0; i < notas.length; i++) {
        sumaNotas += notas[i];
    }
    let promedio = sumaNotas / notas.length;
    if (promedio < 5) {
        console.log('Suspenso');
    } else if (promedio >= 5 && promedio < 7) {
        console.log('Aprobado');
    } else if (promedio >= 7 && promedio <= 10) {
        console.log('Sobresaliente');
    }
}
calcularPromedio(notas);

/*Se solicita al usuario que ingrese por teclado 10 números, el programa devolverá:
1º Cuantos son positivos
2º Cuantos son negativos
3º Cuantos son pares*/

let veces = 10;
let numeros = [];
let numerosPositivos = 0;
let numerosNegativos = 0;
let numerosPares = 0;

function introducirNumeros(){
    for(let i = 0; i < veces; i++){
        do {
            numeros[i] = prompt('Introduzca un numero');
        } while (isNaN(numeros[i]));
    }
        return numeros;
}
   
function tipoNumeros(array = numeros){
    for(let i = 0; i < array.length; i++){
        if(array[i] > 0){
            numerosPositivos++;
        }else if(array[i] < 0){
            numerosNegativos++;
        }else{
            console.log('Hay valores 0')
        }
        
        if(array[i] % 2 === 0){
            numerosPares++;
        }
    } 
}

function imprimirNumero(){
    console.log(`El numero de Positivos son ${numerosPositivos}`);
    console.log(`El numero de Negativos son ${numerosNegativos}`);
    console.log(`El numero de Pares son ${numerosPares}`);
}

introducirNumeros();
tipoNumeros();
imprimirNumero();



