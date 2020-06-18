"use strict";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

//REST
var usuario = {
  nome: "Lucca",
  idade: 18,
  profissao: 'Estagiário'
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(restp); // const arr = [1,2,3,4];
// const newArr = arr.map((item, index) => item + index);
// const sum = arr.reduce((total, next) => total + next)
// const filter = arr.filter(item => item % 2 === 0)
// const find = arr.find(item => item == 2)
// const soma = (a = 3, b = 2) => a + b;  
// console.log(find);
// console.log(filter);
// console.log(sum);
// console.log(newArr);
// const usuario = {
//     nome: 'Lucca',
//     idade: 18,
//     endereco: {
//         cidade: 'São Paulo',
//         estado: 'SP'
//     },
// };
// const nome1 = usuario.nome;
// const idade1 = usuario.idade;
// const estado1 = usuario.endereco.estado;
// const {nome, idade, endereco: {estado}} = usuario;
// console.log(nome);
// console.log(idade);
// console.log(estado);
// function showData({nome, idade, endereco:{estado}}){
//     console.log(nome);
//     console.log(idade);
//     console.log(estado);
// }
// showData(usuario);
