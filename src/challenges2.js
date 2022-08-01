// Desafio 11
function generatePhoneNumber(arr) {
  //seu código aqui
  if (arr.length !== 11) {
    return ('Array com tamanho incorreto.');
  }
  let repeats = 0;
  let phoneNumber = '';
  for (let index of arr) {
    for (i = 0; i < arr.length; i += 1)
      if (index === arr[i]) {
        repeats += 1;
      }
    if (index > 9 || index < 0 || repeats >= 3) {
      return ('não é possível gerar um número de telefone com esses valores');
    } 
    else { repeats = 0;}
  }
  phoneNumber = '(' + arr[0] + arr[1] + ') ' + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + '-' + arr[7] + arr[8] + arr[9] + arr[10];
  return (phoneNumber)
}


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
function hydrate(str) {
  // seu código aqui
  let drinksStr = str.match(/\d+/g);
  let sumDrinks = 0;
  for (i = 0; i < drinksStr.length; i +=1) {
      sumDrinks += parseInt(drinksStr[i])
  }
  if (sumDrinks === 1) {
    return(sumDrinks + ' copo de água')
  } else {
  return(sumDrinks + ' copos de água')
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
