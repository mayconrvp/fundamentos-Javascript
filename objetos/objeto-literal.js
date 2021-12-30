const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
};

// const objPersonagem2 = objPersonagem;
// objPersonagem2.nome = "Gandalf, o Cinzento";

// console.log(objPersonagem.nome); //Gandalf, o Cinzento
// console.log(objPersonagem2.nome); //Gandalf, o Cinzento

/**
 * A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos.
 * Isso porque o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol):
 *
 * Como podemos contornar esse comportamento quando criamos objetos? Além de utilizar a notação literal, objetos também podem ser criados através do método Object.create():
 */

const objPersonagem3 = Object.create(objPersonagem);
objPersonagem3.nome = "Gandalf, o Cinzento";

console.log(objPersonagem.nome); //Gandalf
console.log(objPersonagem3.nome);

/**
 * O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.
 * Dessa forma, objPersonagem2 é uma instância diferente de objPersonagem e pode ser trabalhada de forma independente.
 */
