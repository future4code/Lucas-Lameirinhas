```function calculaNota(ex, p1, p2) {
  let notaProva1 = p1 * 2
  let notaProva2 = p2 * 3
  let notaExercicio = ex * 1
  let mediaAluno = (notaExercicio + notaProva1 + notaProva2) / 6
  
  if (mediaAluno >= 9){
    return "A"
  } else if (mediaAluno < 9 && mediaAluno >= 7.5){
    return "B"
  } else if (mediaAluno < 7.5 && mediaAluno >= 6){
    return "C"
  } else {
    return "D"
  }
}```