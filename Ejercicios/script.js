
/* Ejercicio 1
Solicita un nombre, la edady muestra por consola el mensaje "Hola ____, tienes _____  años y el año que viene tendras ____ años"

let nombre = prompt('Introduce tu nombre')
let edad = prompt('Introduce tu edad')

let edad2 = Number(edad) + Number(1);

console.log(`Tu nombres es ${nombre} y tu edad es de ${edad} años. El año que viene tendras ${edad2} años`);

*/

/* Ejercicio 2

Escriba un programa que pueda calcular el area de 3 figuras geometicas, triangulo, rectangulo y circulo. En primer lugar pregunta de 
que figura se quiere calcular el area, despues solicita los datos que necesites para calcularlo.
    triangulo = b*h/2
    rectangulo = b*h
    circulo = pi *r2 (pi * radio al cuadrado)


let base, altura, radio, area, figura, tipo;
tipo = prompt('Selecciona una figura. \n1. Triangulo. \n2. Rectangulo. \n3. Circulo.')

figura = Number(tipo);

switch (figura) {
    case 1:
        base = prompt('Ingresa el valor de la base: ');
        altura = prompt('Ingresa el valor de la altura: ');

        area = (Number(base) * Number(altura)) / 2;
        console.log(area);
        break;

    case 2:
        base = prompt('Ingresa el valor de la base: ');
        altura = prompt('Ingresa el valor de la altura: ');

        area = Number(base) * Number(altura);
        console.log(area);
        break;

    case 3:
        radio = prompt('Ingresa el valor del radio:');

        area = Math.PI * Number(radio);
        console.log(area);
        break;

    default:
        console.log('Por favor selecciona una opcion valida.');
        break;
}

*/

/* Ejercicio 3

Solicita un numero e imprime todos los numeros pares e impares desde ese numero con el mensaje "es par" o  "es impar"

1 - es impar 
2 = es par
3 - es impar
4 - es par
5 - es par

*/

/*

let num = parseInt(prompt('Introduce un numero: '));

for(let i=1; i<=num;i++){
    if (i%2==0) {
        console.log(`${i} - es par`);
    }else{
        console.log(`${i} - es impar`);
    }
        
}

*/

/* Ejercicio 4

Escribe un programa que pida un numero entero mayor que 1 y que escriba si el numero es primo o no,



let num = prompt('Ingrese un numero entero mayor que uno: ')

for (i = 0; num / 2; i++) {
    if (num % i == 0 || num == 0 || num ==1 | num == 4) {
        console.log('El numero no es primo');

    } else {
        console.log('El numero es primo');
        break;
    }
} 

*/

/* Ejercicio 5

Escriba un programa para calcular el factorial de un numero

*/

/* 

let num = prompt('Ingresar un numero entero: ')
let r = 1;
for(i = num; i>0; i--){
    r *= i;
}
console.log(r); 

*/


/* Ejercicio 6

Escriba un programa para calcular el factorial de un numero

*/

/* 

let num = prompt('Ingresar un numero entero: ')
let r = 1;
for(i = num; i>0; i--){
    r *= i;
}
console.log(r); 

*/


/* Ejercicio 7

Crea 3 arrays. El primero tendra 5 numeros y el segundo se llamara pares y el tercero impares, ambos estaran vacios. Despues multiplica cada uno 
de los numeros del primer array por un numero aleatorio entre 1 y 10, si el resultado es par guarda ese numero en el array de pares y si es impar
en el array de impares. Muestra por consola:
    -la multiplicacion que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares

*/

/*

numeros = [2,3,6,7,13];
pares = [];
impares = [];

for (const number of numeros) {
    let random = Math.round(Math.random() * 10 + 1);
    const resultado = number * random;

    console.log(`${number} x ${random} = ${resultado}`);
    if (resultado % 2 == 0) {
        pares.push(resultado);
    } else {
        impares.push(resultado);
    }
}

console.log(`Los resultados pares son: ${pares} `);
console.log(`Los resultados pares son: ${impares} `);

*/

/* Dado un array de ;etras, solicita un numero de DNI y calcula que letra le corresponde. El numero no puede ser negativo ni tener mas de ocho digitos.
La posicion de la letra es el resultado del modulo del numero introducido entre 23

*/

const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E','T']

const DNI = prompt('Introduce tu DNI')

if (DNI.length==8 && parseInt(DNI)>0) {
    console.log(`Tu DNI completo es ${DNI}${letras[DNI%23]}`);
}