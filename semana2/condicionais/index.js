//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Leia o código abaixo:

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 

// O código testa se um número tem o resto da divisão igual a 0 ou não. Se ele tem o resto da divisão igual a 0 recebemos a mensagem "Passou no teste.", senão recebemos a mensagem "não passou no teste."

// b) Para que tipos de números ele imprime no console "Passou no teste"? 

// Para os números que tem o resto da divisão igual a 0.

// c) Para que tipos de números a mensagem é "Não passou no teste"?

// Para os números que tem o resto da divisão diferente de 0.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?

// O código acima serve para consultar os preços das frutas que existem no supermercado quando o usuario escreve uma fruta no prompt.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?

// A mensagem impressa será "O preço da fruta Maçã é R$ 2.25"

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?

// A mensagem impressa seria "O preço da fruta Pêra é R$ 5" porque o código entenderia que o case "Pêra" e´inserido no grupo 'defalt'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo?

// A primeira linha do código está pedindo um NUMERO para o usuario digitar.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

// A mensagem no terminal seria "Esse numero passou no teste", porque 10 é maior que 0. Apareceria erro, porque o código não definiu o "else".

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.

// Sim, pois o código não definiu um "else", e o 'let mensagem' só existe dentro do escopo do 'if'.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE ESCRITA DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

// a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// const idadeUsuario = Number(prompt("Qual a sua idade?"))

// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// if (idadeUsuario >= 18){
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir ainda.")
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const verificaTurno = prompt("Em qual turno você estuda? Coloque 'M' para 'Matutino', 'V' para 'Vespetino' ou 'N' para 'Noturno'.")

// const periodoMatutino = "M"
// const periodoVespetino = "V"
// const periodoNoturno = "N"

// if (verificaTurno === periodoMatutino){
//     console.log("Bom Dia!")
// } else if (verificaTurno === periodoVespetino) {
//     console.log("Boa Tarde!")
// } else if (verificaTurno === periodoNoturno){
//     console.log("Boa Noite!")
// } else {
//     console.log("Não entendi a sua resposta.")
// }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// const verificaTurno = prompt("Em qual turno você estuda? Coloque 'M' para 'Matutino', 'V' para 'Vespetino' ou 'N' para 'Noturno'.")

// const periodoMatutino = "M"
// const periodoVespetino = "V"
// const periodoNoturno = "N"

//  switch(verificaTurno){
//      case periodoNoturno:
//          console.log("Boa Noite!")
//          break
//          case periodoVespetino:
//              console.log("Boa Tarde!")
//              break
//              case periodoMatutino:
//                  console.log("Bom Dia!")
//                  break
//                  default:
//                      console.log("Não entendi o que você disse.")
//  }

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 4- Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// const perguntaUsuario1 = prompt("Qual o gênero de filme que vamos assistir?")
// const perguntaUsuario2 = Number(prompt("Qual o preço do ingresso em R$?"))

// const respostaQueMeuAmigoQuer1 = "Fantasia"
// const respostaQueMeuAmigoQuer2 = 15

// if (perguntaUsuario1 === respostaQueMeuAmigoQuer1 && perguntaUsuario2 <= respostaQueMeuAmigoQuer2){
//     console.log("Bom filme!!!")
// } else {
//     console.log("Escolha outro filme :(")
// }

