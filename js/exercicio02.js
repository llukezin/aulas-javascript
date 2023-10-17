"use strict";

let alunos = [
    {
        nome: "joaozinho",
        id: 1,
    },
    {
        nome: "Mariazinha",
        id: 2,
    },
    {
        nome: "Giuseppezinho",
        id: 3, 
    }
];
 
let contagem = alunos.length;

 

for(let i = 0; i < contagem; i++){

    console.log(`Clientes: ${alunos[i].nome}`);

}
