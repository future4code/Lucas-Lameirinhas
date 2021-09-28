//2
function obterEstatisticas(numeros: numero[]) {

    const numerosOrdenados:numero[] = numeros.sort(
        (a, b) => a - b
    )

    let soma:numero[] = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:numero[] = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

//a) 
type numero = {
    a: number,
    b: number
}