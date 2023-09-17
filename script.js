let nota1 = Number(prompt("Digite sua nota da primeira Unidade:"));
let nota2 = Number(prompt("Digite a sua segunda unidade:"));

let resultado = (nota1 + nota2) /2;

alert(resultado >=5);

if(resultado >=5){
    alert("Parabéns, você passou de Ano :) ")
}else{
    alert("Infelizmente você não tirou a média, você está em recuperação :/")
}