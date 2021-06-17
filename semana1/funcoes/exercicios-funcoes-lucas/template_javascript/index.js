//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE INTERPRETAÇÃO DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Leia o código abaixo:

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// a) O que vai ser impresso no console?

// No primeiro vai ser impresso 10 e no segundo vai ser impresso 50. A função esta realizando multiplicações.

// b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?

// A função continuaria funcionando normalmente, mas no console não apareceria o resultado e nem nada porque retiramos o comando `console.log`.

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Leia o código abaixo:

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

// a) Explique o que essa função faz e qual é sua utilidade

// Essa função pega o texto que o usuario colocar, passa ele todo pra letras minusculas e verifica se no texto foi inserido a palavra "cenoura"

// b) Determine qual será a saída no console para cada uma das 3 entradas do usuário:
    //  i.   Eu gosto de cenoura // true
    //  ii.  CENOURA é bom pra vista // true
    //  iii. Cenouras crescem na terra // false

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~EXERCICIOS DE ESCRITA DE CÓDIGO~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 1- Escreva as funções explicadas abaixo:

// a) A função não deve receber nenhum parâmetro e deve imprimir uma mensagem falando algumas informações sobre você, como: 

// "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."

// function imprimeFraseDeInfoPessoal1(){
//     console.log("Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.")
// }

// imprimeFraseDeInfoPessoal1()

// Troque o nome, idade, cidade e se é estudante ou não por informações sobre você. Lembrando que a função não possui entradas, apenas imprime essa mensagem.

// function imprimeFraseDeInfoPessoal(){
//     console.log("Eu sou Lucas, tenho 27 anos, moro em São Paulo e sou estudante.")
// }

// imprimeFraseDeInfoPessoal()

// b)  Agora escreva uma função que receba 4 parâmetros que correspondem às informações de uma pessoa: o nome (string), a idade (number), a cidade (string) e uma profissão (string). Ela deve retornar uma string que unifique todas as informações da pessoa em uma só mensagem com o template:

// function imprimeFraseDeInfoPessoal(Nome, idade, cidade, profissao){
//     console.log(`Eu sou ${Nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
// }

// imprimeFraseDeInfoPessoal("Lucas", 27, "Sao Paulo", "estudante")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 2- Escreva as funções explicadas abaixo:

// a) Escreva uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e retorne o resultado. Invoque a função e imprima no console o resultado.

// function doisNumerosRecebidos(n1, n2){
//     const soma = n1 + n2
//     console.log(`O resultado da soma é ${soma}`)
//     return soma
// }

// doisNumerosRecebidos(54, 17)

// b) Faça uma função que recebe 2 números e retorne um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

// function doisNumerosBooleanos(n1, n2){
//     const comparacao = n1 >= n2
//     console.log (comparacao)
//     return comparacao
// }

// doisNumerosBooleanos(34, 23)

// c) Escreva uma função que receba um número e devolva um booleano indicando se ele é par ou não

// function parOuImpar(n1){
//     const par = n1 % 2 === 0
//     console.log (`Se deu 'true' o número é par, se deu 'false' o número é impar ${par}`)
//     return par
// }

// parOuImpar(635)
// parOuImpar(464)

// d) Faça uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela em letras maiúsculas.

// function mensagemRecebida(frase){
//     console.log(frase.toUpperCase())
//     console.log(frase)
//     return frase

// }

// mensagemRecebida("Nossa que exercicio legal")

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 3- Crie uma função para cada uma das operações básicas (soma, subtração, multiplicação e divisão). Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, mostre no console o resultado das operações:

// const n1 = Number(prompt("insira um número"))
// const n2 = Number(prompt("Insira outro número"))

// function operacoesMatematicas(n1,n2){
//     const soma = n1 + n2
//     const subtracao = n1 - n2
//     const multiplicacao = n1 * n2
//     const divisao = n1 / n2
//     console.log(`Os números inseridos foram ${n1} e ${n2}`)
//     console.log(`O resultado da soma é ${soma}.`)
//     console.log(`O resultado da subtração é ${subtracao}.`)
//     console.log(`O resultado da multiplicação é ${multiplicacao}.`)
//     console.log(`O resultado da divisão é ${divisao}.`)
//     return operacoesMatematicas
// }

// operacoesMatematicas(n1,n2)

//TO FELIZ QUE FUNCIONOU TUDO! :)