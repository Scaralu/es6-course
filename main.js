//REST

const usuario = {
    nome : "Lucca",
    idade: 18,
    profissao: 'Estagiário'
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(restp);




// const arr = [1,2,3,4];

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
