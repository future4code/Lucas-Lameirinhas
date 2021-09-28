"use strict";
console.log("Hey, Mundo!");
let nome = "João";
nome = 5;
nome = true;
nome = null;
console.log(nome);
const person = {
    nome: "Marina",
    idade: 31,
    email: "marina@labenu"
};
const arrayMultiplo = [1, "abc", 3, null, { nome: "João", email: "joao@labenu", idade: 25 }];
var marca;
(function (marca) {
    marca["RENAULT"] = "Renault";
    marca["VW"] = "Volkswagen";
    marca["FORD"] = "Ford";
    marca["PEUGEOT"] = "Peugeot";
})(marca || (marca = {}));
const mustang = {
    marca: marca.FORD,
    volumeDoTanque: 61
};
const gol = {
    marca: marca.VW,
    volumeDoTanque: 45,
    temMotorFlex: true
};
const sandero = {
    marca: marca.RENAULT,
    volumeDoTanque: 55,
    temMotorFlex: true
};
const logan = {
    marca: marca.RENAULT,
    volumeDoTanque: 55,
    temMotorFlex: true
};
const garagem = [mustang, gol, sandero, logan];
const novoCarro = { marca: marca.PEUGEOT, temMotorFlex: true, volumeDoTanque: 90 };
garagem.push(novoCarro);
console.log(garagem);
//# sourceMappingURL=index.js.map