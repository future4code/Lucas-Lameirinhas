//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- O que o código abaixo está fazendo? Qual o resultado impresso no console?

// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)

// O código esta pegando uma variavel que começa com valor 0 e está adicionando 1 valor a mais cada vez que o código é rodado, até que esse valor de numero de vezes que roda não seja maior ou igual a 5. O resultado impresso no console será 10.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Leia o código abaixo:

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }

// a) O que vai ser impresso no console?

// O código vai pegar o array lista e vai mostrar no console apenas os números maiores que 18, ou seja, mostrará os números '19,21,23,25,27,30'.

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

// Sim, eu teria que usar a função .lenght() para realizar esse código

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// No console apareceria isso:
// *
// **
// ***
// ****
// Porque na primeira linha, teria 1 asterisco. Na segunda linha, teria 2 asteriscos. Na terceira linha, 3 asteriscos.....

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE ESCRITA DE CÓDIGOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

// b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array

// c) Por fim, imprima o array com os nomes dos bichinhos no console

// let bichinhosDoUsuario = Number(prompt("Quantos bichinhos de estimação você tem?"))
// let usuarioSemBichinho = 0
// let listaBichinhosDoUsuario =[]

// if (bichinhosDoUsuario === 0) {
//     console.log("Que pena! Você pode adotar um pet!")
// }   else if (bichinhosDoUsuario > 0) {
//     let i = 0
//     while (i < bichinhosDoUsuario) {
//         const nomesComMensagem = prompt("Digite os nomes")
//         listaBichinhosDoUsuario.push(nomesComMensagem)
//         i++
//     }
// }

// console.log("Então eles são: ", listaBichinhosDoUsuario)


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Considere que você tenha acesso a um array  (chamado de 'array original') que é composto somente de números. Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas:

// const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// a) Escreva um programa que **imprime** cada um dos valores do array original.

// for(let num of array){
//     console.log(num)
// }

// b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10

// for(let num of array){
//     console.log(num / 10)
// }

// c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array

// let arrayNovo = []
// for (let i=0 ; i % 0; i++) {
//     arrayNovo.push(i)
//     console.log(arrayNovo)
// }



// d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.

// let arrayOriginal = [1, 2, 3, 4]
// let imprimirMensagem = (arrayOriginal) => {
//     for(i = 0; i < array.lenght; i++){
//         let novoArrayStrings = []
//         novoArrayStrings.push(`O elemento do index ${i} é: ${arrayOriginal[i]}`)

//         console.log(novoArrayStrings)
//     }
// }
// imprimirMensagem(arrayOriginal)

// e) Escreva um programa que imprima no console o maior e o menor números contidos no array original

// let mostrarMaiorEMenorNumeros = (arrayOriginal) => {
//     let maiorNumero = 0
//     let tam = arrayOriginal.lenght
//     for(i=0; i<arrayOriginal.lenght; i++) {
//         if(maiorNumero < arrayOriginal[i]) {

//         }
//     }
// }
// mostrarMaiorEMenorNumeros(arrayOriginal)

// hoje foi sem condições :(