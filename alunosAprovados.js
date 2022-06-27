const alunos = [
  {
    nome: 'Yasmin',
    nota: 9,
    turma: '6A',
  },
  {
    nome: 'Bruno',
    nota: 8,
    turma: '6A',
  },
  {
    nome: 'Joao',
    nota: 5,
    turma: '6A',
  },
  {
    nome: 'Miguel',
    nota: 3,
    turma: '6A',
  },
];

function AlunosAprovados(arrayInicial, media) {
  let aprovados = [];

  for (let i = 0; i < arrayInicial.length; i++) {
    const { nota, nome } = arrayInicial[i];

    if (nota >= media) {
      aprovados.push(nome);
    }
  }
  return aprovados;
}

console.log(AlunosAprovados(alunos, 7));
