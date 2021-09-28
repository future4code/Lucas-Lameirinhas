//1-
//a) Devemos usar o process.argv para receber comandos do terminal
//b)
// const nome = process.argv[2]
// const idade = process.argv[3]

// console.log (`Oi, meu nome é ${nome} e eu tenho ${idade} anos!`)
//c)
// const idadeInput = Number(process.argv[3]) + 7

// console.log (`Oi, meu nome é ${nome} e eu tenho ${idade} anos! Daqui sete anos eu vou ter ${idadeInput}`)

//2
const primeiroInput = Number(process.argv[2])
const segundoInput = Number(process.argv[3])

switch(operacao){
    case "soma":
        primeiroInput + segundoInput
        break;
        case "subt":
            primeiroInput - segundoInput
            break;
            case "mult":
                primeiroInput * segundoInput
                break;
                case "div":
                    primeiroInput / segundoInput
                    break;
}