// Challenge 1 - Create a function using the operator &&:
function compareTrue(var1, var2) {
  // seu código aqui
  if (var1 === true && var2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(triangleBase, triangleHeight) {
  // seu código aqui
  return (triangleBase * triangleHeight) / 2;
}

// Desafio 3
function splitSentence(str) {
  // seu código aqui
  return str.split(" ");
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let nameFirst = arr[0];
  let nameLast = arr[arr.length - 1];
  return nameLast + ", " + nameFirst;
}

// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
