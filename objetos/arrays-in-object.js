//acessar lista de numeros de telefones das pessoas cadastradas no sistema e imprimi-la verificando se há mais de um número em algum cadastro

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678923",
  email: "andre@email.com",
  fones: ["55912345678", "5521988743124"],
};

cliente.fones.forEach((telefone) => {
  console.log(telefone);
});

cliente.fones.push("552233224455");

console.log(cliente);
