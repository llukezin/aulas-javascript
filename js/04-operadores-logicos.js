"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resutados do aluno fictício
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 8;
let resultado;

/*  Operador lógico && (AND - E) */
// if(mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//    Resutado = "aprovado";
// } else {
//    Resutado = "reprovado";
// }
// if (mediaFinal >= mediaMinima && faltas <= limiteDeFaltas){
//        resultado = "aprovado";
//} else if (faltas > limiteDeFaltas){
//   resultado = "reprovado por faltas";
//} else {
//    resultado = "reprovado";
//}

if( faltas > limiteDeFaltas ){
    resultado = "reprovado por faltas";
} else if( mediaFinal >= mediaMinima ){
    resultado = "aprovado";
} else {
    resultado = "reprovado";
}

 console.log(`O aluno ${aluno} está ${resultado}`);
 console.log(`Média do aluno: ${mediaFinal}`);
 console.log(`Faltas do aluno: ${faltas}`);

 console.log("-----------------------");

 /* Operador logico || (OR - OU) */
 let diaDaSemana = "domingo";

 if(diaDaSemana == "sábado" || diaDaSemana == "domingo") {
    console.log("Final de semana :)");
 } else {
    console.log("Vá trabalhar...");
 }

 console.log("-----------------------");

 /*  Operador lógico ! (NOT - NÃO/NEGAÇÃO) */
 let blackFriday = true;
 if( !blackFriday){
    console.log("preços normais...");
 } else {
    console.log("preços com desconto...");
 }