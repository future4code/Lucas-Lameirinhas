"use strict";
const minhaString = "olá";
const meuNumero = 27;
const pessoa = {
    nome: "Lucas",
    idade: 27,
    corFavorita: "Verde"
};
const pessoa1 = {
    name: "Lucas",
    age: 27,
    favoriteColor: "Green"
};
const pessoa2 = {
    name: "Luciana",
    age: 50,
    favoriteColor: "Red"
};
const pessoa3 = {
    name: "Roberto",
    age: 57,
    favoriteColor: "Blue"
};
var favoriteColor;
(function (favoriteColor) {
    favoriteColor["VERDE"] = "Green";
    favoriteColor["VERMELHO"] = "Red";
    favoriteColor["AZUL"] = "Blue";
    favoriteColor["AMARELO"] = "Yellow";
    favoriteColor["LARANJA"] = "Orange";
})(favoriteColor || (favoriteColor = {}));
//# sourceMappingURL=exerc1.js.map