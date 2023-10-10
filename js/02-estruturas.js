/* estruturaas de Dados 

- Arrays (Vetores/Matrizes):
Lista de dados indexados, sequenciais e acessiveis por um
indice numerico.

- Objetos 
Lista de dados não indexados e formados por propriedades e valores. */


// Arrays (os indices sempre começam do zero)
let cursos = ["Node.js", "React", "SQL", "UX/UI Design"];

console.log(cursos); // saida direra/estruturada
console.log(cursos[2]); // SQL

 /* exercicio
 
1) Crie uma constante chamada "dados" e coloque nela
os dados de uma pessoa: nome, sobrenome, idade, telefone e cidade

2) mostre no console uma mensagem contendo somente o nome e a idade da pessoa. 
Exemplo: "fulano tem 25 anos." */

const dados = ["Gavião", "SCCP", 23, "4002-8922", "São Paulo"];

console.log(`${dados[0]} tem ${dados[2]} anos.`);

console.log("--------")

// objeto
let carro = {
    marca: "Fiat",
    modelo: "Uno com escada",
    portas: 2,
    cor: "branco",
    opcionais: ["Ar condicionado", "Vidros eletricos", "Alarme"]
};

console.log(carro);
console.log(carro.modelo);
console.log(`Carros da ${carro.marca} tem a cor ${carro.cor}`);
console.log(`Este carro tem ${carro.opcionais[0]} e ${carro.opcionais[2]}`);

 /* Exercicio
 1)crie um novo contendo informações de algo que você gosta (filme, livro comida, jogo etc)
 
 2) Mostre uma mensagem com pelo menos 2 propriedades do objeto que você criou. */

 let pizza = {
    tipo: ["Salgada", "doce"], 
    sabor: ["Toscana, Chocolate"],
    borda: "Catupiry",
    quantidades: ["1","2","3"],
};

// objetivo com array e com objeto
let pessoa = {
    nome: 'Shiryu',
    idade: 20,
    telefones: ["11-2135-0300", " 11-91234-5678"],
    medidas: {
        peso: 65,
        altura: 1.75
    }
};

console.log(`Nome^: ${pessoa.nome}`);
console.log(`Celular: ${pessoa.telefones[1]}`);
console.log(`Peso: ${pessoa.medidas.peso}`);

// Array de objetos
let alunos = [
    {
        nome: "Naruto",
        idade: 10
    },
    {
        nome: "Guts",
        idade: 30
    },
    {
        nome: "dohko",
        idade: 120
    }
];

console.log( alunos[1].nome ); // Guts
console.log( alunos[0].nome); // Naruto
console.log(
    `O cavaleiro de ouro originalmente era o ${alunos[2].nome} de Libra que tem ${alunos[2].idade}anos`);

    // Array como matriz
    let tecnologias = [
        ["HTML5", "CSS3", "JavaScript"],
        ["PHP", "SQL", "APIs", "Node", "Python"],
        ["Figma", "Photoshop"]
    ];

    console.log(tecnologias[1][3]); // Node
    console.log(tecnologias[2][1]); //Photoshop
    console.log(tecnologias[0][0]); // HTML5

 





