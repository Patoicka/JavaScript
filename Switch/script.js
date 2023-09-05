let num = 2;

switch (num) {
    case 1: console.log('num tiene el valor uno');
        break;

    case 2: console.log('num tiene el vlaor dos');
        break;

    default: console.log('num no es ni 1 ni 2');
        break;
}


switch (num) {
    case 1:
    case 3:
    case 5:
        console.log('num es de valor inpar');
        break;

    case 2:
    case 4:
    case 6:
        console.log('num es de valor par');
        break;
}