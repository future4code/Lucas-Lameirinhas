//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Leia o código abaixo

// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])
// console.log(filme.elenco[filme.elenco.length - 1])
// console.log(filme.transmissoesHoje[2])

// a) O que vai ser impresso no console?

// No primeiro console.log vai aparecer o primeiro item da lista de elenco do filme, que é o nome "Matheus Nachtergaele".
// No segundo console.log vai aparecer o último item da lista de elenco do filme, que é o nome "Virginia Cavendish"
// No terceiro console.log vai aparecer o terceiro item da lista 'transmissoesHoje' que é o objeto {canal:"Globo", horario: "14h"}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Leia o código abaixo

// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)
// console.log(gato)
// console.log(tartaruga)

//a) O que vai ser impresso no console?

// No primeiro console.log vai aparecer todo o objeto da const cachorro, ou seja, {nome:"juca", idade: 3, raca:"SRD"}
// No segundo console.log vai aparecer todo objeto da const gato, que é a const cachorro mas com o nome modificado. Então ficaria: {nome:"Juba", idade: 3, raca:"SRD"}
//No terceiro console.log vai aparecer todo objeto da const gato, com o nome 'gato.nome' substituindo todas as vogais "a" por "o". Então ficaria: {nome:"Jubo", idade: 3, raca:"SRD"}

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// Ela copia toda informação de um objeto para um novo objeto, chamado "espalhamento" ou "Spread"

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Leia o código abaixo:

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))
// console.log(minhaFuncao(pessoa, "altura"))

// a) O que vai ser impresso no console?

// No primeiro console.log vai aparecer "false", porque ele tá pedindo na const pessoa o termo "backender"
// No segundo console.log vai aparecer "undefined", porque não existe dentro do objeto a propriedade "altura"

// b) Explique o valor impresso no console. Você sabe por que isso aconteceu?

// Não imprimiu nada no segundo console.log porque "altura" não é uma propriedade do objeto 'pessoa'

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE ESCRITA DE CÓDIGOS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Resolva os passos a seguir: 

// a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// Exemplo de entrada
// const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
 // Exemplo de saída
//  "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"// Exemplo de entrada
//  const pessoa = {
//     nome: "Amanda", 
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
//  }
 
 // Exemplo de saída
 //"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

 const pessoa ={
     nome: "Amanda",
     apelidos: ["Amandinha", "Mandinha", "Mandi"]
 }
 function imprimeMensagem (){
     console.log (`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelidos[0]}, ${pessoa.apelidos[1]} ou ${pessoa.apelidos[2]}`)
 }
 imprimeMensagem(pessoa)

 // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como argumento o novo objeto

 const novoApelido = {...pessoa, apelidos:['Mandoca', 'Ma', 'Mandica']
}
 function imprimeMensagem2 (){
    console.log (`Eu sou ${novoApelido.nome}, mas pode me chamar de: ${novoApelido.apelidos[0]}, ${novoApelido.apelidos[1]} ou ${novoApelido.apelidos[2]}`)
 }
 imprimeMensagem2(novoApelido)

 //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

 // 2- Resolva os passos a seguir: 

// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

const objeto1 ={
    nome: 'Lucas',
    idade: 27,
    profissao: 'estudante'
}
const objeto2 ={
    nome: 'Giulia',
    idade: 29,
    profissao: 'radialista'
}

// b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// 1. O valor de `nome`
// 2. O numero de caracteres do valor `nome`
// 3. O valor de `idade`
// 4. O valor de `profissão`
// 5. O numero de caracteres do valor `profissão`

function objetosImprimidos(){
    console.log(objeto1.nome, objeto1.nome.length, objeto1.idade, objeto1.profissao, objeto1.profissao.length)
    console.log(objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length)
}
objetosImprimidos()

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Resolva os passos a seguir:

// a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

const fruta1 = {
    nome: "morango",
    disponibilidade: true
}
const fruta2 = {
    nome: "laranja",
    disponibilidade: true
}
const fruta3 = {
    nome: "maça",
    disponibilidade: true
}

// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados. 

function recebeFruta(){
    carrinho.push(fruta1)
    carrinho.push(fruta2)
    carrinho.push(fruta3)
    console.log(carrinho)
    return carrinho
}
recebeFruta()

// d) Imprima a variável `carrinho` e garanta que ela agora seja um array preenchido com três objetos.

console.log(carrinho)