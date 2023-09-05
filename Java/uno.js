let cadena = 'Hola mundo';
let cadena2 = 'Hola buenas tardes mi nombre es Isaac Alejandro y tengo 20'
let cadena3 = 'Hola'

console.log(cadena.length); /* Numero de caracteres */

console.log(cadena.toUpperCase());  /* Poner todo a mayusculas */

console.log(cadena.indexOf('Hola'));    /* Devuelve 0 en caso de encontrar el valor ingresado, en caso de no enconrarlo devuelve -1 */

console.log(cadena.replace('mundo','gente')); /* Remplaza una parte de la cadena por la otra ingresa */

console.log(cadena.substring(2,9)); /* Se utiliza para extrar una parte de la cadena, el primer valor indica donde inicia y el segundo hasta donde extra */

console.log(cadena.slice(-3)); 

console.log(cadena2.trim()); /* Sirve para eliminar espacios al inicio y al final de la cadena */

console.log(cadena.startsWith('Hola')); /* Sirve para comprar si inicia con el caracter indicado. Su valor opcional es el largo que se quiere evaluar*/

console.log(cadena.endsWith('o'));  /* Sirve para comprar si termina con el caracter indicado */

console.log(cadena.includes('n'));

console.log(cadena3.repeat(3));

let nombre = 'Juan';
let apellido = 'Gomez';
let edad = 20;

console.log('Hola '+nombre+' '+apellido+'. Tienes '+edad);

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad}.`);

