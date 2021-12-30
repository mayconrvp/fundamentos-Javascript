//Acessar um objeto com informações de um cliente e exibir essas informações no console.

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678912",
  email: "andre@email.com",
};

//notação de ponto
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`);
console.log(cliente.cpf.substring(0, 3));
