//EXERCÍCIOS DE INTERPRETAÇÃO DO CÓDIGO:

// 1) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.
// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)

// ~~~~~~~~~~~~~~~~    	RESPOSTA     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// let a = 10
// let b = 10

// console.log(10)
//SERÁ IMPRESO O NUMERO 10

// b = 5
// console.log(10, 5)
//SERÁ IMPRESSO OS NÚMEROS 10 E 5, PORQUE A LET(b) MUDOU O VALOR


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2) Analise o programa abaixo e diga o que será impresso no console, SEM EXECUTAR o programa.

// let a = 10
// let b = 20
// let c
// c = a
// b = c
// a = b

// console.log(a, b, c)

// ~~~~~~~~~~~~~~~~    	RESPOSTA     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// let a = 10
// let b = 20
// let c
// c = 10
// b = 10
// a = 10

// console.log(10, 10, 10)
//SERÁ IMPRESSO 3 NÚMEROS 10, PORQUE TODAS AS let SE TRANSFORMARÃO NO VALOR '10'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3) Analise o programa abaixo, entenda o que ele faz e sugira melhores nomes para as variáveis. Lembre-se que devemos escolher nomes significativos, usar o padrão camelCase. Alem disso, os nomes não podem começar com números ou caracteres especiais.

//let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

// ~~~~~~~~~~~~~~~~    	RESPOSTA     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//let p = prompt("Quantas horas você trabalha por dia?")
// let t = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${t/p} por hora`)

//NO 'let p' RECEBEREMOS O VALOR DO USUÁRIO DE QUANTAS HORAS ELE TRABALHA POR DIA
//NO 'let t' RECEBEREMOS O VALOR DO USUÁRIO DE QUANTO ELE RECEBE POR DIA
//DEPOIS DO USUÁRIO MANDAR AS DUAS INFORMAÇÕES ELE RECEBERÁ NA TELA DO SEU NAVEGADOR O SEGUINTE ALERTA: "Voce recebe $(number) por hora". EM (number) VIRÁ O RESULTADO DA DIVISÃO QUE FOI FEITA PELO CÓDIGO. ESSA DIVISÃO SÓ SERÁ REALIZADA SE OS DADOS FOREM ENVIADOS E GRAVADOS COM O TIPO *NUMBERS*

//

// 1) Construa um programa, seguindo os seguintes passos:
// a) Declare uma variável para armazenar um nome, sem atribuir um valor.
// let nome 
// // b) Declare uma variável para armazenar uma idade, sem atribuir um valor.
// let idade 
// // c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.
// console.log (typeof nome)
// console.log (typeof idade)
// // d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

// //Foi imprimido 2 undefined porque não foi atribuido nenhum valor ainda para as minhas variáveis

// // e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.
// const nome2 = prompt ('Qual o seu nome?')
// const idade2 = prompt ('Qual a sua idade?')

// // f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

// console.log (nome2)
// console.log (idade2)
// //Notei que agora me retorna as informações que eu pedi.

// // g) Para finalizar, imprima na tela a mensagem: "Olá nome,  você tem idade anos". Onde nome e idade são os valores que o usuário inseriu
// console.log ('Olá',nome2, "voce tem" ,idade2, 'anos') 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Exercícios de escrita de código
// 1) Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está usando uma roupa azul hoje?". 
/// Depois, siga os passos:
//a) Crie três novas variáveis, contendo as respostas
//b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. 

const voceUsaCamiseta = prompt('você usa camiseta?')
const camisetaEhAzul = prompt('Sua camiseta é azul?')
const camisetaColorida = prompt('Sua camiseta é colorida?')

console.log ('você usa camiseta?',voceUsaCamiseta, 'Sua camiseta é azul?',camisetaEhAzul, 'Sua camiseta é colorida?',camisetaColorida)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2) Suponha que temos duas variáveis a e b, cada uma com um valor inicial
// let a = 10
// let b = 25
//Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`. 

// Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
// let a = 10
// let b = 25

// // Aqui faremos uma lógica para trocar os valores

// // Depois de trocados, teremos o seguinte resultado:
// console.log("O novo valor de a é", a) // O novo valor de a é 25
// console.log("O novo valor de b é", b) // O novo valor de b é 10
// Crie a lógica que deve ser inserida no código para que os valores de a e b sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar também).

let a = 10
let b = 25

console.log('o valor de A é', a)
console.log('o valor de B é', b)

let c = a
let d = b

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
 console.log("O novo valor de a é", d) 
 console.log("O novo valor de b é", c) 