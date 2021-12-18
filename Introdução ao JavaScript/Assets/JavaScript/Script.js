/***************************
Arquivo geral da aula
Criado por: Yuri Pellini
***************************/
//Variável
var NumAtual1999 = document.getElementById("NumAtual");
var NumAtual = 0;
//Funções
function increment(){
    NumAtual = NumAtual+1;
    NumAtual1999.innerHTML = NumAtual;
}
function decrement(){
    NumAtual = NumAtual-1;
    NumAtual1999.innerHTML = NumAtual;
}