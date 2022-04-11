// Desafio 10
function techList(skillsArr, nome) {
  let newArr = [];
  if (skillsArr.length < 1) {
    return 'Vazio!';
  }
  for (let i = 0; i < skillsArr.length; i += 1) {
    newArr.push({ name: nome, tech: skillsArr[i] });
  }
  newArr.sort((a, b) => {
    if (a.tech < b.tech) {
      return -1;
    }
    if (a.ltech > b.tech) {
      return 1;
    }
    return 0;
  });
  return newArr;
}

// Desafio 11
function generatePhoneNumber(arr) {
  // seu código aqui
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
