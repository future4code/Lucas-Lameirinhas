//~~~~~~~~~~~~~~~~~~~~~~~~ EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Leia o código abaixo. Indique todas as mensagens impressas no console,
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)  ------> O RESULTADO VAI VOLTAR 'false'

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado)  ------> O RESULTADO VAI VOLTAR 'false'

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)  ------> O RESULTADO VAI VOLTAR 'true'

// console.log("d. ", typeof resultado)  -------> O RESULTADO VAI VOLTAR 'boolean'

// a = false
// b = false
// c = true
// d = boolean

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Seu colega se aproxima de você falando que o código dele não funciona como devia.  Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console? 

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// RESPOSTA: O problema do código é que ele está tentando fazer uma conta de soma mas não expecificou nas variáveis que elas são de tipo NUMBER. Portanto o console vai voltar como resposta da soma a junção de duas STRINGS ao invés de o resultado da soma.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Para o exercício anterior, sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.

// let primeiroNumero = (Number(prompt("Digite um numero!"))
// let segundoNumero = (Number(prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE ESCRITA DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Faça um programa que:

//a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

// c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

// d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// const idadeUsuario = Number(prompt("Qual a sua idade?"))
// const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo(a)?"))

// const idadeMaior = idadeUsuario > idadeAmigo
// console.log ("Sua idade é maior que a do seu melhor amigo?", idadeMaior)

// const idadeDiferenca = idadeUsuario - idadeAmigo
// console.log ("Essa é a diferença de idade entre vocês:", idadeDiferenca)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Faça um programa que:

// a) Peça ao usuário que insira um número **par**

// const parUsuario = Number(prompt("Insira um número par:"))

// b) Imprima na console **o resto da divisão** desse número por 2.

// const restoDiv = parUsuario % 2
// console.log ("resto da divisão", restoDiv)

// c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

// Resposta: Ele sempre volta o número 0 como resultado.

// d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// Resposta: Ele sempre volta o número 1 como resultado.

// const parUsuario = Number(prompt("Insira um número par:"))
// const restoDiv = parUsuario % 2
// console.log ("resto da divisão", restoDiv)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console 

//const idadeUsuario = Number(prompt("Insira sua idade"))

// a) A idade do usuário em meses

//const idadeMes = idadeUsuario * 12
//console.log ("Você já viveu", idadeMes, "meses.")

// b) A idade do usuário em dias

//const idadeDias = idadeUsuario * 365
//console.log ("Você já viveu", idadeDias, "dias.")

// c) A idade do usuário em horas

//const idadeHoras = idadeUsuario * 8760
//console.log ("Você já viveu", idadeHoras, "horas.")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4- Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens:

// O primeiro numero é maior que segundo? true
// O primeiro numero é igual ao segundo? false
// O primeiro numero é divisível pelo segundo? true
// O segundo numero é divisível pelo primeiro? true

// const numeroA = Number(prompt("Coloque um número:"))
// const numeroB = Number(prompt("Coloque outro número:"))

// const resultadoA = numeroA > numeroB
// console.log ("O primeiro numero é maior que o segundo?", resultadoA,)

// const resultadoB = numeroA === numeroB
// console.log ("O primeiro numero é igual ao segundo?", resultadoB,)

// const resultadoC = ((numeroA / numeroB) === 0) 
// console.log ("O primeiro numero é divisivel pelo segundo?", resultadoC,)

// const resultadoD = ((numeroB / numeroA) === 0)
// console.log ("O segundo numero é divisivel pelo primeiro?", resultadoD,)
