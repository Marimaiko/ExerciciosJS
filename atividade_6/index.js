// ## Importe a biblioteca ##
let rs=require('readline-sync');



let nome1= rs.question('Digite seu nome: ');
let dado1 = rs.question('Escreva alguma coisa:');
let caract1 =dado1.length;

let nome2= rs.question('Digite seu nome: ');
let dado2 = rs.question('Escreva alguma coisa:');
let caract2 =dado2.length;

if(caract1>caract2)
{
    console.log(nome1+' digitou mais caracteres que '+nome2);
}
else if (caract1<caract2)
{
    console.log(nome2+' digitou mais caracteres que '+nome1)
}
else
{
    console.log('Ambos escreveram '+caract2+ ' caracteres')

}