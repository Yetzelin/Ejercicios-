let n = 0, s1 = 0, s2 = 0;

n = parseInt(prompt("Dime donde termina"));

for(let i = 1; i <= n; i++){
    s1 = s1 + i;
}

s2 = (n*((n + 1)/2));

console.log("S1 = ",s1);
console.log("S2 = ",s2);

if(s1 == s2){
    console.log("son iguales");
}else{
    console.log("no son iguales");
}
