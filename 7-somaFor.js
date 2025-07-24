const arrayNumeros = [18, 95 , 45, 76, 23, 99];

for (let numero of arrayNumeros){
    if(numero + 10 > 100 || numero > 100) continue;
    console.log(numero + 10);
}