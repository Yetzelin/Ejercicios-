let n, negativo = 0, positivo = 0;
let Line_Texto = "";
while(n != 0){
    n = parseInt(prompt("Dame un numero"));
    console.log(n);

    if(n < 0){
        negativo++;
    }else{
        positivo++;
    }
}
for (let i = 1; i <= positivo; i++){
    Line_Texto += "*";
}
console.log("Positivos: ",Line_Texto);

Line_Texto = "";

for (let y = 1; y <= negativo; y++){
    Line_Texto += "*";
}
console.log("Negativos: ",Line_Texto);