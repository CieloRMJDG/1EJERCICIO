const r1 = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});


r1.question("Escribe un numero:", (n) =>{
const numero = Number(n);
    if (isNaN(numero)) {
        console.log("Entrada invalida, no es un numero");
        return;
    } else if (numero % 2 === 0) {
        console.log("Es par");
    } else {
        console.log("Es impar");
    }

    r1.close();
});

//switch
console.log("--------SWITCH--------");

console.log("Elige una opcion: 1. Medicina general, 2. Odontologia, 3. Psicologia");


const option = 2;

switch (option) {
    case 1:
        console.log("Medicina general");
        break;
    case 2:
        console.log("Odontologia");
        break;
    case 3:
        console.log("Psicologia");
        break;

    default:
        console.log("Opcion no valida"); 
        break;
}

//FOR

console.log("--------FOR--------");

for (let index =0; index <= 5;index++){
    console.log(`vuelta numero: ${index}`);
}

//WHILE
console.log("--------WHILE--------");

let contador =1;

while (contador <=10) {
    console.log(`vamos en el numero. ${contador}`);
    contador++;
}
