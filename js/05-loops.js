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

let contador = 10;
do {
    console.log(`Contador vale: ${contador}`);
    contador++;
} while ( contador <= 3 )