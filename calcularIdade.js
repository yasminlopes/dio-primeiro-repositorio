function calcularIdade(anos) {
  return `Daqui a ${anos} anos, ${this.nome} terá ${
    this.idade + anos
  } de idade`;
}

const pessoa1 = {
  nome: 'Yasmin Lopes',
  idade: 21,
};

const pessoa2 = {
  nome: 'Maria Paula',
  idade: 26,
};

const pessoa3 = {
  nome: 'Bruno Lopes',
  idade: 30,
};

const animal = {
  nome: 'Snoopy',
  idade: 5,
  raca: 'Shih-Tzu',
};

/*console.log(calcularIdade.call(animal, 5));*/

console.log(calcularIdade.apply(pessoa1, [10]));
