// ## Importe a biblioteca ##
let readlineSync=require('readline-sync');

let quadrado=readlineSync.question('Eh a area de um quadrado? ')



if (quadrado=='sim')
{
    let lado1=readlineSync.question('Informe a medida do lado: ')
    let area=lado1*lado1;
    console.log('A área do seu quadrado é: '+area)
}
else
{
    let lado1=readlineSync.question('Informe a medida do lado: ')
    let lado2=readlineSync.question('Informe a medida do outro lado: ')
    let area=lado1*lado2
    console.log('A área do seu retângulo é: '+area)
}