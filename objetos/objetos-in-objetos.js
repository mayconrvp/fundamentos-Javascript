//Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678923",
  email: "andre@email.com",
  fones: ["55912345678", "5521988743124"],
};

cliente.dependentes = {
  nome: "Pedro",
  parentesco: "filho",
  dataNasc: "20/03/1999",
};

console.log(cliente);

cliente.dependentes.nome = "Sara Silva";

console.log(cliente);
