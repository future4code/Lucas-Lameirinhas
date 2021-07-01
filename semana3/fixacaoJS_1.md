ˋˋˋfunction calculaSalario(qtdeCarrosVendidos, valorTotalVendas) {
 
  const salarioVendedores = 2000
  const comissaoVendedores = (qtdeCarrosVendidos * 100) + (valorTotalVendas * 0.05)
  const salarioTotal = salarioVendedores + comissaoVendedores
  return salarioTotal
 
}ˋˋˋ