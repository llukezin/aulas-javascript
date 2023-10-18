"use strict";

/*  funções de seleção no DOm

-getElementBYid()
Seleciona um elemento atraves de um id

-querySeletor()
Seleciona UM elemento através de um seletor.

-querySelectorALL()
Sleciona VARIOS elementos atraves de um/varios seletor(es)*/

/*  Exemplos */
const subtitulo = document.getElementById("subtitulo-dom");
const desenho = document.querySelector("figure");
const descricao = document.querySelector("#descricao");

console.log(desenho);
console.log(descricao);

const variosElemetos = document.querySelectorAll("h3","a");
console.log(variosElemetos);
console.log(variosElemetos[1]);

// Modificando o DOM 
const titulo = document.querySelector("h1");
titulo.textContent = "Olá JavaScript!";
titulo.style.textAlign = "center"; // CSS online via JS
titulo.classList.add("destaque"); //Classe CSS via JS

/*  Selecionando os links contido na lista */
const linksReferencia = document.querySelectorAll("ul li a");
console.log(linksReferencia);

let quantidadeDeLinks = linksReferencia.length;

for(let link of linksReferencia){
    link.setAttribute("target", "_blank");
}

//for( let i = 0; i < quantidadeDeLinks; i++ ){
//    linksReferencia[i].setAttribute("target", "_blank");
//}