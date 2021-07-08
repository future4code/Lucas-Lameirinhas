```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let novoArray = arrayDeNumeros.filter(numero => numeroEscolhido === numero)
    if(novoArray.length){
      return `O número ${numeroEscolhido} aparece ${novoArray.length}x`
     }else{
      return `Número não encontrado`
    
  
  // Escreva seu código aqui
}```