
let numbers = [1, 2, 3, 4, 5];

console.log(`La cantidad de numeros son: ${numbers.length}`);    //Array.lenght devuelve el numero de posiciones que contiene el array

number = 4;

console.log(Array.isArray(number));     //Array.isArray() Devuelve true si la variable es una array
console.log(Array.isArray(numbers));

console.log(numbers);
numbers.shift();        //Elimina el primer elemento del array y devuelve ese elemento
console.log(numbers);
numbers.pop();          //Elimina el ultimo elemento del array y devuelve ese elemento


console.log(numbers);
let newlenght = numbers.push(6);       //.push sirve para agregar elementos al final del arry devuelve la nueva longitud
console.log(numbers);
console.log(newlenght);

console.log(numbers);
let newlenght2 = numbers.unshift(6);       //.unshift sirve para agregar elementos al final del arry devuelve la nueva longitud
console.log(numbers);
console.log(newlenght2);

console.log(numbers);
console.log(numbers.indexOf(2));    //Devuelve el primer indice del numero que coincida con el valor especificado o -1 sino encuentra nada

console.log(numbers);
console.log(numbers.lastIndexOf(2));    //Devuelve el ultimo indice del numero que coincida con el valor especificado o -1 sino encuentra nada

console.log(numbers);
console.log(numbers.reverse);       //Invierte el orden de los elementos

console.log(numbers);
console.log(numbers.join('-'));     //Devuelve el array con el separador que indiquemos

console.log(numbers);
numbers.splice(3);      //Elimina desde la posicion 3 hasta el final
numbers.splice(3);      //Elinina desde la posicion 2 los valores que le indiquen
console.log(numbers);       //.slice extra elementos de una array desde el inicio a hasta el indice b. Sino existe b lo hace desde a hasta el final. 
                            //sino existe a ni ve crea una copia original

let newNumbers = numbers.slice(2,3);
console.log(numbers);
console.log(newNumbers);
