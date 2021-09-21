//1

//a) 
const minhaString: string = "olá"
//Se eu atribuo número a ela, ela dá erro porque ela espera receber somente uma string

//b)
const meuNumero: number | string = 27
//Utilizando o caractere "|" para ele funcionar como "ou"

//c)
const pessoa: {nome: string, idade: number, corFavorita: string} = {
    nome: "Lucas",
    idade: 27,
    corFavorita: "Verde"
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

type person = {
    name: string,
    age: number,
    favoriteColor: string
}

const pessoa1: person = {
    name: "Lucas",
    age: 27,
    favoriteColor: "Green"
}
const pessoa2: person = {
    name: "Luciana",
    age: 50,
    favoriteColor: "Red"
}
const pessoa3: person = {
    name: "Roberto",
    age: 57,
    favoriteColor: "Blue"
}

//d) 
enum favoriteColor {
    VERDE = "Green",
    VERMELHO = "Red",
    AZUL = "Blue",
    AMARELO = "Yellow",
    LARANJA = "Orange"
}