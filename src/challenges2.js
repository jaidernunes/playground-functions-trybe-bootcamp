// Desafio 11
function generatePhoneNumber() {}
// seu código aqui
//   let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];

// if (arr.length !== 10) {
//   console.log('Array com tamanho incorreto.')
// } else if () {

// }????????????????????????????????????????
// }

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return (false);
  }
  if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return (false);
  }
    return (true);
  }

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
