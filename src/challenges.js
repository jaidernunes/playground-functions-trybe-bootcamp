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
  return str.split(' ');
}

// Desafio 4
function concatName(arr) {
  // seu código aqui
  let nameFirst = arr[0];
  let nameLast = arr[arr.length - 1];
  return `${nameLast}, ${nameFirst}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return ((wins * 3) + ties);
}

// Desafio 6
function highestCount(arr) {
  // seu código aqui
  let largest = arr[0];
  for (let i = 0; i < arr.length; i += 1) {
    if (largest < arr[i]) {
      largest = arr[i];
    }
  }
  let highestSum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    if (largest === arr[i]) {
      highestSum += 1;
    }
  }
  return highestSum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arr) {
  // seu código aqui
  let fizzArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if ((arr[i] % 3) === 0 && (arr[i] % 5) === 0) {
      fizzArr.push('fizzBuzz');
    } else if ((arr[i] % 3) === 0) {
      fizzArr.push('fizz');
    } else if ((arr[i] % 5) === 0) {
      fizzArr.push('buzz');
    } else {
      fizzArr.push('bug!');
    }
  }
  return fizzArr;
}

// Desafio 9
function encode(phraseEncode) {
  // seu código aqui
  let encodedPhrase = '';
  for (i = 0; i < phraseEncode.length; i += 1) {
    if (phraseEncode[i] === 'a') {
      encodedPhrase += 1;
    } else if (phraseEncode[i] === 'e') {
      encodedPhrase += 2;
    } else if (phraseEncode[i] === 'i') {
      encodedPhrase += 3;
    } else if (phraseEncode[i] === 'o') {
      encodedPhrase += 4;
    } else if (phraseEncode[i] === 'u') {
      encodedPhrase += 5;
    } else {
      encodedPhrase += phraseEncode[i];
    }
  }
  return encodedPhrase;
}

function decode(phraseDecode) {
  // seu código aqui
  let decodedPhrase = '';
  for (i = 0; i < phraseDecode.length; i += 1) {
    if (phraseDecode[i] === '1') {
      decodedPhrase += 'a';
    } else if (phraseDecode[i] === '2') {
      decodedPhrase += 'e';
    } else if (phraseDecode[i] === '3') {
      decodedPhrase += 'i';
    } else if (phraseDecode[i] === '4') {
      decodedPhrase += 'o';
    } else if (phraseDecode[i] === '5') {
      decodedPhrase += 'u';
    } else {
      decodedPhrase += phraseDecode[i];
    }
  }
  return decodedPhrase;
}

// Desafio 10
function techList(arr, name) {
  // seu código aqui
  let returnedArray = [];
  arr.sort();
  if (arr.length > 0) {
    for (let i in arr) {
      returnedArray.push({ tech: arr[i], name });
    }
    return (returnedArray);
  } else {
    return ('Vazio!');
  }
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
