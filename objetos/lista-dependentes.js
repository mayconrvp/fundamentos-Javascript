//Verificar a melhor forma de agregar a informação de um novo dependente ao objeto Clienteconst

cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678923",
  email: "andre@email.com",
  fones: ["55912345678", "5521988743124"],
  dependentes: [
    {
      nome: "Pedro",
      parentesco: "filho",
      dataNasc: "20/03/1999",
    },
  ],
};

cliente.dependentes.push({
  nome: "João Paulo",
  parentesco: "filho",
  dataNasc: "26/04/2001",
});

//console.log(cliente);

const filhaMaisNova = cliente.dependentes.filter(
  (dependente) => dependente.dataNasc === "26/04/2001"
);

console.log(filhaMaisNova[0].nome);
