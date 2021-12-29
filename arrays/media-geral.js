const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function mediaSala(notasDaSala) {
  const somaDasNotas = notasDaSala.reduce((acum, atual) => atual + acum, 0);
  return somaDasNotas / notasDaSala.length;
}

console.log(`Media da sala de Javascript ${mediaSala(salaJS)}`);
console.log(`Media da sala de Java ${mediaSala(salaJava)}`);
console.log(`Media da sala de Python ${mediaSala(salaPython)}`);

const notas = [10, 6.5, 8, 7];

const medias = notas.reduce((acum, atual) => atual + acum, 0) / notas.length;
console.log(medias);

/*
1) O método reduce() está trabalhando com dois parâmetros. 
O primeiro é a função callback obrigatória para retornar o cálculo 
e o segundo parâmetro é um número que representa o valor inicial - no caso, 0.

2) A função callback foi escrita diretamente dentro do reduce(),
e esta função também está recebendo dois parâmetros, 
ambos obrigatórios: O valor acumulado e o valor atual.

3) A função callback foi escrita na forma de arrow function; 
nesse caso, quando só temos uma linha de instrução dentro da 
função (atual + acum) não precisamos usar chaves e nem da palavra-chave return.
*/
