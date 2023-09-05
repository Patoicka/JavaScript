let names = ['Paco', 'Jose', 'Paula', 'Maria']

for(let i=0; i< names.length; i++){
    if (names[i]==='Paula') {
        break;
    }
    console.log(names[i]);
}

for(let index in names){
    console.log();
}