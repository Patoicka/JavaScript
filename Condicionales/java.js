let num1 = 0;
let num2 = -2;

// && ambas condiciones tienen que ser ciertas
// || solo una condicion tiene que ser cierta

/* if (num1>0) {
    if (num2>0) {
        console.log(`${num1} y ${num2} son mayores que cero`);
    } else if(num2<0){
        console.log(`${num1} es mayor que cero y ${num2} es menor que cero`);
    } else { 
        console.log(`${num1} es mayor que cero y ${num2} es igual que cero`);
    }

}else if(num1<=0){
    if (num2>0) {
        console.log(`${num1} no es mayor que cero y ${num2} si es mayor`);
    } else if(num2<0){
        console.log(`${num1} es menor que cero y ${num2} es igual que cero`);
    } else{
        console.log(`${num1} y ${num2} son menores que cero`);
    }
}

let word = 'Sol';

if (word.length>4) {
    console.log(`${word} tiene mas 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}

*/

let respuesta = true;

if (respuesta==true) {
    console.log(`Respuesta tiene el valor true`);
} else if(respuesta !=true){
    console.log(`Respuesta tiene el valor false`);
}


if(respuesta) console.log(`\nRespuesta tiene el valor true`);
if(!respuesta) console.log(`\nRespuesta tiene el valor false`);
