```function calculaPrecoTotal(quantidade) {
  const macasMenorQuantidade = 1.30
  const macasMaiorQuantidade = 1.00
  if (quantidade < 12){
    return macasMenorQuantidade * quantidade
  } else {
    return macasMaiorQuantidade * quantidade
  }
}```