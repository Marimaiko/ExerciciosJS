// ## Importe a biblioteca ##
let rs=require('readline-sync');


let mes=rs.question('Que mes voce nasceu? ');

if (mes==1 )
{
    let dia=rs.question('Que dia voce nasceu? ');
    
    if(dia<=1 || dia<=19)
    {
        console.log('Voce eh de CAPRICORNIO');
    }
    else if(dia<=20 || dia<=31)
    {
        console.log('Voce eh de AQUARIO');
    }

}
else if (mes==2)
{
    let dia=rs.question('Que dia voce nasceu? ')

    if(dia<=1 || dia<=18)
    {
        console.log('Voce eh de AQUARIO');
    }
    else if(dia<=19 || dia<=29)
    {
        console.log('Voce eh de PEIXES');
    }
}
else if (mes==3)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=20)
    {
        console.log('Voce eh de PEIXES');
    }
    else if(dia<=21 || dia<=31)
    {
        console.log('Voce eh de ARIES');
    }
}
else if (mes==4)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=19)
    {
        console.log('Voce eh de ARIES');
    }
    else if(dia<=20 || dia<=31)
    {
        console.log('Voce eh de TOURO');
    }
}
else if (mes==5)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=20)
    {
        console.log('Voce eh de TOURO');
    }
    else if(dia<=21 || dia<=31)
    {
        console.log('Voce eh de GEMEOS');
    }
}
else if (mes==6)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=21)
    {
        console.log('Voce eh de GEMEOS');
    }
    else if(dia<=22 || dia<=31)
    {
        console.log('Voce eh de CANCER');
    }
}
else if (mes==7)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=22)
    {
        console.log('Voce eh de AQUARIO');
    }
    else if(dia<=23 || dia<=31)
    {
        console.log('Voce eh de LEAO');
    }
}
else if (mes==8)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=22)
    {
        console.log('Voce eh de LEAO');
    }
    else if(dia<=23 || dia<=31)
    {
        console.log('Voce eh de VIRGEM');
    }
}
else if (mes==9)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=22)
    {
        console.log('Voce eh de VIRGEM');
    }
    else if(dia<=23 || dia<=31)
    {
        console.log('Voce eh de LIBRA');
    }
}
else if (mes==10)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=22)
    {
        console.log('Voce eh de LIBRA');
    }
    else if(dia<=23 || dia<=31)
    {
        console.log('Voce eh de ESCORPIAO');
    }
}
else if (mes=11)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=21)
    {
        console.log('Voce eh de ESCORPIAO');
    }
    else if(dia<=22 || dia<=31)
    {
        console.log('Voce eh de SAGITARIO');
    }
}
else if (mes==12)
{
    let dia=rs.question('Que dia voce nasceu? ');

    if(dia<=1 || dia<=21)
    {
        console.log('Voce eh de SAGITARIO');
    }
    else if(dia<=22 || dia<=31)
    {
        console.log('Voce eh de CAPRICORNIO');
    }
}