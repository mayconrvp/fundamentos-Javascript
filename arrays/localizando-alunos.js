const alunos = ["João", "Juliana", "Caio", "Ana"];
const medias = [10, 7, 9, 6];

//includes -> booleano

let listaDeNotasEAlunos = [alunos, medias];

const exibeNomeNota = (nomeAluno) => {
  if (listaDeNotasEAlunos[0].includes(nomeAluno)) {
    let indice = listaDeNotasEAlunos[0].indexOf(nomeAluno);
    return (
      listaDeNotasEAlunos[0][indice] +
      ", sua média é " +
      listaDeNotasEAlunos[1][indice]
    );
  } else {
    return "Aluno não está cadastrado";
  }
};

console.log(exibeNomeNota("Juliana"));
