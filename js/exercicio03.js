"use strict";

// dados de entrada
let valorDaCotacaoDoDia= 1000
let valorEmDolares= 5.03

//Função que reaçiza a conversão matematica ao receber PARÂMETROS
function converteMoeda(valor, cotacao ){
    return valor * cotacao;
}

/* variavel que receberá o resultado processado pela função Depois que  
a função terminar sua execução */
let valorConvertido = converteMoeda(valorDaCotacaoDoDia, valorEmDolares);

//saidas apos o processamento 
//console.log(valorEmDolares);// quanto que era em dolares 
//console.log(valorConvertido);// quanto que fica em reias

console.log(formatarMoeda(valorEmDolares, "en", "USD"));
console.log(formatarMoeda(valorConvertido, "pt-br", "BRL"));

function formatarMoeda(valor, local, moeda){
    let opcoes = {
        style: "currency",
        currency: "BRL"
    };

    return valor.toLocaleString(local, opcoes);
}