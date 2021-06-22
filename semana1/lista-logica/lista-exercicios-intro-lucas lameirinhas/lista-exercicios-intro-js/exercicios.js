// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt("Digite a altura do retangulo"))
  const largura = Number(prompt("Digite a largura do retangulo"))
  const area = altura * largura
  console.log(area)
  return area

}


// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Qual o ano atual?"))
  const anoNascimento = Number(prompt("Em que ano você nasceu?"))
  const idade = anoAtual - anoNascimento
  console.log(idade)
  return idade

}


// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  const imc = peso / (altura * altura)
  return imc
  

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt('Qual o seu nome?')
  const idade = Number(prompt('Qual a sua idade?'))
  const email = prompt('Qual o seu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
  

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt('Cite uma cor favorita')
  const cor2 = prompt('Cite outra cor favorita')
  const cor3 = prompt('Cite mais uma cor favorita')
  const coresUsuario = [cor1, cor2, cor3]
  console.log(coresUsuario)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
  
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  const minimoIngressosVendido = custo / valorIngresso
  return minimoIngressosVendido

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  const mesmoTamanho = string1.length === string2.length
  return mesmoTamanho

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  const primeiroElemento = array[0]
  return primeiroElemento
  

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  const ultimoElemento = array[array.length-1]
  return ultimoElemento

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const ultimoA = array[0]
  array[0] = array[array.length - 1]
  array[array.length - 1] = ultimoA
    
  return array
  

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  
  const tamanhoString = string1.toUpperCase() === string2.toUpperCase()
  return tamanhoString
  

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt('Qual o ano atual?'))
  const anoNascimento = Number(prompt('Qual o ano de nascimento?'))
  const anoCarteira = Number(prompt('Qual o ano que sua carteira de identidade foi emitida?'))
  const idade = anoAtual - anoNascimento
  const renovacao = anoAtual - anoCarteira
  const criterio1 = (idade <=20 && renovacao >=5)
  const criterio2 = (20 < idade && idade <= 50 && renovacao >= 10)
  const criterio3 = (idade > 50 && renovacao >=15)
  const renovaRg = criterio1 || criterio2 || criterio3
  console.log(renovaRg) 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const condicao1 = ano % 400 === 0
  const condicao2 = ano % 4 === 0 
  const condicao3 = ano %100 ===0
  const resultado = condicao1 || condicao2 && !condicao3
  
  return resultado
  

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorDeIdade = prompt("Você tem mais de 18 anos?")
  const ensinoMedioCompleto = prompt("Você tem ensino médio completo?")
  const disponibilidadeHorario = prompt("Você possui disponibilidade exclusiva durante os horarios do curso?")
  const podeEstudar = maiorDeIdade.includes("sim") && ensinoMedioCompleto.includes("sim") && disponibilidadeHorario.includes("sim")
  console.log(podeEstudar)

}