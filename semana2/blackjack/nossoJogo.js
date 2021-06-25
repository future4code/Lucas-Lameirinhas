/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
 const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
 console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
 console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */



//  const cartaJogador = (carta1, carta2) => {
//     carta1 = comprarCarta()
//     carta2 = comprarCarta()
//     let somaValorUsuario = carta1.valor + carta2.valor
//     console.log(`Usuário - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaValorUsuario} `)
//     return somaValorUsuario
//  }

//  const cartaComputador = (carta1, carta2) => {
//     carta1 = comprarCarta()
//     carta2 = comprarCarta()
//     let somaValorComputador = carta1.valor + carta2.valor
//     console.log(`Computador - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${somaValorComputador} `)
//     return somaValorComputador
//  }


console.log("Boas vindas ao jogo de Blackjack!")
 
 if(confirm("Deseja iniciar a rodada?")) {
 console.log("Sorteie sua mão")
 let cartaUsuario = [comprarCarta(), comprarCarta()]
 const somaCartasUsuario = cartaUsuario[0].valor + cartaUsuario[1].valor
 console.log(`Usuário - cartas: ${cartaUsuario[0].texto} ${cartaUsuario[1].texto} - pontuação ${somaCartasUsuario} `)

 let cartaComputador = [comprarCarta(), comprarCarta()]
 const somaCartasComputador = cartaComputador[0].valor + cartaComputador[1].valor
 console.log(`Computador - cartas: ${cartaComputador[0].texto} ${cartaComputador[1].texto} - pontuação ${somaCartasComputador} `)
 


} if(somaCartasComputador < somaCartasUsuario){
   console.log("VOCÊ GANHOU!!!!")

} else if (somaCartasComputador > somaCartasUsuario){
   console.log("O computador venceu :(")


} else if (somaCartasUsuario === somaCartasComputador){
   console.log("Empatou!")

} else {
    console.log("O jogo acabou!")
 }

 // DEIXEI COMENTADO TODAS AS LÓGICAS QUE EU FIZ, NÃO SEI PORQUE MAS O PROGRAMA NÃO RODA QUEM É O VENCEDOR DE JEITO NENHUM. FIZ 3 LÓGICAS DIFERENTES, ATÉ CRIEI FUNÇÕES MAS O PROGRAMA NAO RODA O FINAL. 