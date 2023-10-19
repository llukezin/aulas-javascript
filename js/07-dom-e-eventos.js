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

const variosElemetos = document.querySelectorAll("h3", "a");
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

for (let link of linksReferencia) {
    link.setAttribute("target", "_blank");
}

//for( let i = 0; i < quantidadeDeLinks; i++ ){
//    linksReferencia[i].setAttribute("target", "_blank");
//}

/*  Manipulando Eventos  */
const pagina = document.querySelector("body");
const exemplo01 = document.querySelector("#exemplo01");
const mensagem = document.querySelector("#mensagem");

const reprodutorAudio = document.querySelector("#reprodutor-audio");
const imagemMeme = document.querySelector("#imagem-meme");

//ouvinte evento 
exemplo01.addEventListener("click", function(){
    pagina.style.fontFamily = "Verdana";
    mensagem.textContent = "Fonte alterada!";
    mensagem.style.backgroundColor = "yellow";

    // executamos o audio com play
    reprodutorAudio.play();

    // removemoso atributo 
    imagemMeme.removeAttribute("hidden");
});

// exemplo modo noturno
const botao = document.querySelector("#noturno");

botao.addEventListener("click", gerenciarModoNoturno) ;

function gerenciarModoNoturno(){
    pagina.classList.toggle("modo-noturno");
    

    /*  Exercicio faça aqui mesmo neste lugar exatamente aqui */

    if(pagina.className == "modo-noturno") {
        botao.textContent="desativar";}
    else {
        botao.textContent = "ativar"
    }    

    /* Se a página estiver com a classe chamada "modo-noturno",
    então mude o texto do botão para  "desativar".
    caso contrario, faça o botãon exibir o texto "ativar" */
}
