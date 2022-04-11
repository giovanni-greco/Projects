// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 && bool2) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  const area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(stringArr) {
  const string1 = stringArr[0];
  const string2 = stringArr.at(-1);
  return string2.concat(', ', string1);
}

// Desafio 5
function footballPoints(wins, ties) {
  const winPts = wins * 3;
  const tiesPts = ties * 1;
  return winPts + tiesPts;
}

// Desafio 6

function highestCount(numArray) {
  let highestNum = -10;
  let highestRepeat = 0;
  for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] > highestNum) {
      highestNum = numArray[i];
    }
  } for (let i = 0; i < numArray.length; i += 1) {
    if (numArray[i] === highestNum) {
      highestRepeat += 1;
    }
  }
  return highestRepeat;
}

// Desafio 7 abs
function catAndMouse(mouse, cat1, cat2) {
  const cat1Dist = mouse - cat1;
  const cat2Dist = mouse - cat2;
  if (cat1Dist + cat2Dist === 0) {
    return 'os gatos trombam e o rato foge';
  } if (cat1 < cat2) {
    return 'cat1';
  } return 'cat2';
}

// Desafio 8quero usar o comando eslint.executeAutofix

function fizzBuzz(numArray2) {
  let myArr = [];
  for (let i = 0; i < numArray2.length; i += 1) {
    if (numArray2[i] % 5 === 0 && numArray2[i] % 3 === 0) {
      myArr.push('fizzBuzz');
    } else if (numArray2[i] % 5 === 0) {
      myArr.push('buzz');
    } else if (numArray2[i] % 3 === 0) {
      myArr.push('fizz');
    } else {
    myArr.push('bug!');
  }}
  return myArr;
}

// Desafio 9
function encode(string) {
  let myEncodedStr = string.replace(/a/g, '1');
  myEncodedStr = myEncodedStr.replace(/e/g, '2');
  myEncodedStr = myEncodedStr.replace(/i/g, '3');
  myEncodedStr = myEncodedStr.replace(/o/g, '4');
  myEncodedStr = myEncodedStr.replace(/u/g, '5');
  return myEncodedStr;
}

function decode(string) {
  let myDecodedStr = string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return myDecodedStr;
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
};
