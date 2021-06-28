// EXERCÍCIO 01
function inverteArray(array) {
  
  let novoArray = []
  for (let indice = array.length-1; indice >= 0; indice -= 1){
    novoArray.push(array[indice])
  }
  return novoArray
}

// EXERCÍCIO 02
function retornaNumerosParesElevadosADois(array) {
  
  let arrayParesElevados =[]
  for (let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    arrayParesElevados.push(Math.pow(array[i], 2))
  }}
  return arrayParesElevados
} 




// EXERCÍCIO 03
function retornaNumerosPares(array) {
  
  let arrayDePares =[]
  
  for (let i = 0; i < array.length; i++){
  if(array[i] % 2 === 0){
    arrayDePares.push(array[i])
  }
}
  return arrayDePares
}
  



// EXERCÍCIO 04
function retornaMaiorNumero(array) {

  let i = 0
  let maior = -Infinity
 while(i < array.length) {
  if(array[i] > maior){
     maior = array[i]
  }
  i++
}
return maior
}

// EXERCÍCIO 05
function retornaQuantidadeElementos(array) {
  const quantidadeDeElementos = array
  return quantidadeDeElementos.length
}

// EXERCÍCIO 06
function retornaExpressoesBooleanas() {
  const booleano1 = true
  const booleano2 = false
  const booleano3 = !booleano2 
  const booleano4 = !booleano3 

  const letraA =  booleano1 && booleano2 && !booleano4
  const letraB = (booleano1 && booleano2) || !booleano3
  const letraC = (booleano2 || booleano3) && (booleano4 || booleano1)
  const letraD = !(booleano2 && booleano3) || !(booleano1 && booleano3)
  const letraE = !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
  const respostas = [letraA, letraB, letraC, letraD, letraE]
  return respostas
}

// EXERCÍCIO 07
function retornaNNumerosPares(n) {
  let array = []
  for(let i=0; i<n ; i++){
    array.push(2*i)
  }
  return array
}

// EXERCÍCIO 08
function checaTriangulo(a, b, c) {
 if(a !== b && b !== c){
   return "Escaleno"
 } else if (a === b && b === c){
  return 'Equilátero'
 } else {
  return 'Isósceles'
 }
  // return 'Escaleno'
  // return 'Equilátero'
  // return 'Isósceles'
}

// EXERCÍCIO 09
function comparaDoisNumeros(num1, num2) {
 const objeto = {
   maiorNumero: Math.max(num1, num2),
   maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
   diferenca: Math.max(num1, num2) - Math.min(num1, num2)
 }
 return objeto
  // Formato do objeto a ser retornado:
  // {
  //   maiorNumero: X,
  //   maiorDivisivelPorMenor: Y,
  //   diferenca: Z
  // }
}

// EXERCÍCIO 10
function segundoMaiorEMenor(array) {

}

// EXERCÍCIO 11
function ordenaArray(array) {

}

// EXERCÍCIO 12
function filmeFavorito() {

}

// EXERCÍCIO 13
function imprimeChamada() {
  // "Venha assistir ao filme NOME_DO_FILME, de ANO, dirigido por DIRECAO e estrelado por ELENCO."
}

// EXERCÍCIO 14
function criaRetangulo(lado1, lado2) {

}

// EXERCÍCIO 15
function anonimizaPessoa(pessoa) {

}

// EXERCÍCIO 16A
function maioresDe18(arrayDePessoas) {

}

// EXERCÍCIO 16B
function menoresDe18(arrayDePessoas) {

}

// EXERCÍCIO 17A
function multiplicaArrayPor2(array) {

}

// EXERCÍCIO 17B
function multiplicaArrayPor2S(array) {

}

// EXERCÍCIO 17C
function verificaParidade(array) {

}

// EXERCÍCIO 18A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 18B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 19A
function ordenaPorNome(consultasNome) {

}

// EXERCÍCIO 19B
function ordenaPorData(consultasData) {

}

// EXERCÍCIO 20
function calculaSaldo(contas) {

}
