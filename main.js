const arr = [1,2,3,4];

const newArr = arr.map((item, index) => item + index);

const sum = arr.reduce((total, next) => total + next)

const filter = arr.filter(item => item % 2 === 0)

const find = arr.find(item => item == 2)

const soma = (a = 3, b = 2) => a + b;  

console.log(find);
console.log(filter);
console.log(sum);
console.log(newArr);