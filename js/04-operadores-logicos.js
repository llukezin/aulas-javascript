"use strict";

// Requisitos da escola para aprovação
const mediaMinima = 7;
const limiteDeFaltas = 10;

// Resutados do aluno fictício
let aluno = "Jean";
let mediaFinal = 8.5;
let faltas = 8;
let Resutado;

/*  Operador lógico && (AND - E) */
if(mediaFinal >= mediaMinima && faltas < limiteDeFaltas){
    Resutado = "aprovado";
 } else {
    Resutado = "reprovado";
 }

 console.log(`O aluno ${aluno} está ${Resutado}`);
 console.log(`Média do aluno: ${mediaFinal}`);
 console.log(`Faltas do aluno: ${faltas}`);
