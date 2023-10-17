"use strict";

/*  Comados de Repetição
instuções para realizar ações por uma quantidade
específica de vezes.

comandos tradicionais:

- while     -> ENQUANTO
- do/while  -> FAÇA/ENQUANTO
- for       -> PARA 

obs.: normalmente o loop é controlado através de uma variávrl contadora. - */

// let contador = 1;
// while(contador <=5 ){
//    console.log(`Valor de contador: ${contador}`);
//    contador++; // ++ incremento
// }

// EXEMPLO DO/WHILE (FAÇA/ENQUANTO)

// let i = 10;
// do {
//   console.log(`i vale: ${i}`);
//    i++;
// } while ( i <= 3 )

// EXEMPLO FOR (PARA)
// for( let i = 1; i <= 10; i++ ){
//    console.log(`i vale ${i}`);
// }

/* Loop com array */
let clientes = [
    "Dio",
    "Gillan",
    "Martin",
    "Marps",
    "Mercury",

];

// cache da quantidade de elementos do array
let quantidade = clientes.length;

for( let i = 0; i < quantidade; i++  ){
    console.log(`Cliente: ${clientes[i]}`);
}



console.log("------------------------");

//for/of -> para arrays
let bandas = ["Sleyer", "Dream Theater", "Nightwish"];

// para BANDA de BANDAS
for(let banda of bandas){
    console.log(banda);
}

// for/in -> para objetos

let livro = {
    titulo: "HTML5",
    autor: "Maujor",
    site: "http://maujor.com",
    ano: 2016,
    editora: "Novatec",
    edicao: 3
};

// para DADOS dentro/em LIVRO
for(let propriedade in livro){
    // Acessar APENAS a propriedade
    //console.log(propriedade);

    //Acessar VALOR de cada propriedade
   //console.log(livro[propriedade]);


console.log(` ${propriedade} -> ${livro[propriedade]}`);

}