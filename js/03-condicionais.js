/* Estruturas de Controle Condicional 
Comandos que permitem analisar uma ou mais condicões.
E a partir do resultado desta análise (verdadeiro ou falso),
o programa pode execurtar ações diferentes. 

comandos mais comuns: if (se), else (senão), else if (senão se)  */

let usuario = "juean";
let idade = 25;

let mensagem; //indefinida/undefined

// verificar a idade e determinar se é menor ou maior
if( idade >= 18 ){
    mensagem = "maior";
} else{
    mensagem = "menor"; 
}

//apresentando os reusltados apos a condicional
console.log(`${usuario} é ${mensagem} de idade!`);