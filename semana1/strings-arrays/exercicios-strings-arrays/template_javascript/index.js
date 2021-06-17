//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

// let array
// console.log('a. ', array)

//a) undefined (não defini um valor pra variavel array)

// array = null
// console.log('b. ', array)

//b) null (vai imprimir essa string no console)

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)

//c) 11 (porque tem 11 elementos dentro dessa array)

// let i = 0
// console.log('d. ', array[i])

//d) 3 (porque ele tá pedindo o primeiro elemento da array, e o elemento 0 é o número 3)

// array[i+1] = 19
// console.log('e. ', array)

//e) 19 (ele tá transformando o elemento i(0)+1=1 no número 19), então ficaria [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)

//f) 9 (ele tá pedindo o 6° elemento da array, que é o 9)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Leia o código abaixo com atenção 

// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)

// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// Resposta: Vai ficar tudo maiusculo, por causa do toUpperCase()
// Vai mudar todos os "a" por "i", por causa do replaceAll("A","I")
// Vai contar todos os caracteres e espaços da frase
// Vai ficar: SUBI NUM ÔNIBUS EM MIRROCOS // Com 27 caracteres

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE ESCRITA DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, imprima na tela a seguinte mensagem:

// O e-mail emailDoUsuario foi cadastrado com sucesso. Seja bem-vinda(o), nomeDoUsuario!

// const nomeDoUsuario = prompt("Qual o seu nome?")
// const emailDoUsuario = prompt("Qual o seu e-mail?")

// const frase1 = 'O e-mail ' +emailDoUsuario+ ' foi cadastrado com sucesso. Seja bem-vindo(a), '+nomeDoUsuario+'!'
// console.log(frase1)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:

// const comidasPreferidas = ["churrasco", "pizza", "parmegiana", "pure", "torta holandesa"]

// a) Imprima na tela o array completo

//console.log(comidasPreferidas)

// b) Imprima na tela a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.

//const frase1 =`Essas são as minhas comidas preferidas: ${comidasPreferidas}, seguida por cada uma das comidas, ${comidasPreferidas}`

//console.log(frase1) 


// c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima na tela a nova lista

//const usuarioComida = prompt('Qual a sua comida preferida?')
//comidasPreferidas.splice(1,1)

//comidasPreferidas.push(usuarioComida) 
//console.log(comidasPreferidas)



//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Faça um programa, seguindo os passos:

// a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`

// const listaDeTarefas

// b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array


// const tarefa1 = prompt("cite uma tarefa")
// const tarefa2 = prompt("Cite outra tarefa")
// const tarefa3 = prompt("Cite uma última tarefa")

// c) Imprima o array na tela

// const listaDeTarefas = [tarefa1, tarefa2, tarefa3]
// console.log(listaDeTarefas)

// d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 

// const perguntaUsuario = Number(prompt("Digite um número de 1 a 3"))
// console.log(perguntaUsuario)

// e) Remova da lista o item de índice que o usuário escolheu.

// listaDeTarefas.splice (perguntaUsuario -1,1)

// f) Imprima o array na tela

// console.log(listaDeTarefas)


