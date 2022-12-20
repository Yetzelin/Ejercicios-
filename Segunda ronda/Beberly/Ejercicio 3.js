let numero = 0, numeros = 0, mayor = -9999;

numero = parseInt(prompt("¿cuantos numeros vas a almacenar?"));

for(let i = 0; i <= numero; i++){
    numeros = parseInt(prompt("Dame numero"));
    console.log(numeros);

    if(numeros > mayor){
        mayor = numeros;
    }
}

console.log("El mayor es:", mayor);