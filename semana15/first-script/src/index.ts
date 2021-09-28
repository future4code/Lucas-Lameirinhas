console.log("Hey, Mundo!");

type personBase = {
    nome: string,
    idade: number,
    email: string
}

let nome: string | number | boolean | null | personBase = "João";
nome = 5;
nome = true;
nome = null;
console.log(nome);


const person: personBase ={
    nome: "Marina",
    idade: 31,
    email: "marina@labenu"
};


const arrayMultiplo: (null|string|number| personBase)[] = [1, "abc", 3, null, {nome: "João", email: "joao@labenu", idade: 25}];


//exercício 3

// type carro = {
//     marca: string,
//     volumeDoTanque: number,
//     temMotorFlex?: boolean
// };

// const mustang: carro = {
//     marca: "Ford",
//     volumeDoTanque: 61
// };

// const gol: carro = {
//     marca: "Volkswagen",
//     volumeDoTanque: 45,
//     temMotorFlex: true
// };

// const sandero: carro = {
//     marca: "Renault",
//     volumeDoTanque: 55,
//     temMotorFlex: true
// };

// const logan: carro = {
//     marca: "Renault",
//     volumeDoTanque: 55,
//     temMotorFlex: true
// };

// const garagem: carro[] = [mustang, gol, sandero, logan];
// const novoCarro: carro = {marca: "Peugeot", temMotorFlex: true, volumeDoTanque: 90};
// garagem.push(novoCarro);
// console.log(garagem);

//exercicio 4
//função buscar carros por marca. recebe:
//frota, que é um array de carro
//marca, que é uma string opcional
//a função sempre retorna um array de carros

// const filtraCarro = (carro: carro, marca?: string): boolean =>{
//     return carro.marca === marca
// }


// function buscarCarrosPorMarca(
//      frota: carro[],
//      marca?: string,
//      callback?: (carro: carro, marca?: string | undefined) => boolean
//      ): carro[] {
//     if (marca === undefined) {
//         return frota
//     }
 
//     if(callback){
//         callback(frota[0], "lalala");
//     }

//     return frota.filter(
//         (carro: carro) => {
//             return carro.marca === marca
//         }
//     )
//  }

//  const carrosRenault = buscarCarrosPorMarca(garagem, "Renault");

//  const carrosSemPassarMarca = buscarCarrosPorMarca(garagem);
//  console.log("Carros da Renault:", carrosRenault);
//  console.log("Carros sem passar marca:", carrosSemPassarMarca);
 

 //exercicio 6

 enum marca {
     RENAULT = "Renault",
     VW = "Volkswagen",
     FORD = "Ford",
     PEUGEOT = "Peugeot"
 }

 type carro = {
    marca: marca,
    volumeDoTanque: number,
    temMotorFlex?: boolean
};

const mustang: carro = {
    marca: marca.FORD,
    volumeDoTanque: 61
};

const gol: carro = {
    marca: marca.VW,
    volumeDoTanque: 45,
    temMotorFlex: true
};

const sandero: carro = {
    marca: marca.RENAULT,
    volumeDoTanque: 55,
    temMotorFlex: true
};

const logan: carro = {
    marca: marca.RENAULT,
    volumeDoTanque: 55,
    temMotorFlex: true
};

const garagem: carro[] = [mustang, gol, sandero, logan];
const novoCarro: carro = {marca: marca.PEUGEOT, temMotorFlex: true, volumeDoTanque: 90};
garagem.push(novoCarro);
console.log(garagem);

