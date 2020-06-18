"use strict";

var arr = [1, 2, 3, 4];
var newArr = arr.map(function (item, index) {
  return item + index;
});
var sum = arr.reduce(function (total, next) {
  return total + next;
});
var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
var find = arr.find(function (item) {
  return item == 2;
});

var soma = function soma() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return a + b;
};

console.log(find);
console.log(filter);
console.log(sum);
console.log(newArr);
