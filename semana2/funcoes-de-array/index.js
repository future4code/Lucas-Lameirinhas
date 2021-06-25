//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE INTERPRETAÇÃO DE CODIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // a) O que vai ser impresso no console?

  // No console será imprenso o novoArrayA com os mesmos usuarios da const usuarios, mostrando o 'item' que é, o 'index' que esta e 'array' completa


  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  // 2- Leia o código abaixo:

//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

//a) O que vai ser impresso no console?

// No console será impresso somente o item 'nome' de cada conteudo da const usuarios, desconsiderando as outras informaçoes que existem no grupo.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Leia o código abaixo:

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  //a) O que vai ser impresso no console?

  // No console será impresso somente o item 'apelido' que for DIFERENTE da string "Chijo", ou seja, se existir algum apelido "Chijo" ele será desconsiderado e descartado do novo array, que no caso é o novoArrayC.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE ESCRITA DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Dado o seguinte array de cachorrinhos que são clientes de um pet shop, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// const petsApenasNomes = pets.map((nomes) => {
// return nomes.nome
// })
// console.log(petsApenasNomes)

//  b) Crie um novo array apenas com os cachorros salsicha

// const petsApenasRacaSalsicha = pets.filter((racas) => {
//     return racas.raca === "Salsicha"
// })
// console.log(petsApenasRacaSalsicha)
 
//  c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const mensagemParaPoodles = pets.map((item) => {
// if (item.raca === "Poodle"){
//     console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
// } 
// })
// const poodleMensagem = pets.filter(mensagemParaPoodles)
// console.log(poodleMensagem)

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const arrayApenasNome = produtos.map((nomes) => {
// return nomes.nome
// })
// console.log(arrayApenasNome)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const arrayProdutosDesconto = produtos.map((produto) => {
//     return { nome: produto.nome, preco: produto.preco - produto.preco *0.05}
// })
// console.log(arrayProdutosDesconto)

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const arrayBebidas = produtos.filter((item) =>{
//     return item.categoria === "Bebidas"
// })
// console.log(arrayBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const arrayYpe = (item) =>{
//     return item.nome.includes("Ypê")
// }
// const nomeYpe = produtos.filter(arrayYpe)
// console.log(nomeYpe)

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// const maisUmArray = nomeYpe.map((produto) =>{
//     return console.log(`Compre ${produto.nome} por ${produto.preco}.`)
// })
// console.log(maisUmArray)