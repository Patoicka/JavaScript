const numbers = document.getElementById('numbers');
const result = document.getElementById('result');

let num1 = prompt('Ingresa un un numero: '); 
let num2 = prompt('Ingresa un un numero: ');
let num3 = prompt('Ingresa un un numero: ');

if(num3 > num1 && num3 >num2){
    if(num2>num1){
        console.log(`Ordenados son n3 ${num3} -n2 ${num2} - n1 ${num1}`);
    }
    else{
       console.log(`Ordenados son ${num3} - ${num1} - ${num2}`);
    }
}else if(num2>num3 && num2>num3){
    if(num3>num1){
        console.log(`Ordenados son ${num2} - ${num3} - ${num1}`);
    }else{
        console.log(`Ordenados son ${num2} - ${num1} - ${num3}`);
    }
}else{
    if(num3>num2)
        console.log(`Ordenados son ${num1} - ${num3} - ${num2}`);
    else
        console.log(`Ordenados son ${num1} - ${num2} - ${num3}`);
}
