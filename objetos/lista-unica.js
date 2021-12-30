const clientes = [
  {
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
  },
  {
    nome: "Juliana",
    idade: 40,
    cpf: "32165498718",
    email: "juliana@email@email.com",
    dependentes: [
      {
        nome: "Sophia",
        parentesco: "filha",
        dataNasc: "10/05/2005",
      },
    ],
  },
  {
    nome: "Aline",
    idade: 29,
    cpf: "35715925841",
    email: "aline@email.com",
    dependentes: [
      {
        nome: "Mara Silva",
        parentesco: "filha",
        dataNasc: "16/05/1995",
      },
    ],
  },
];

let listaDependentes = [];

for (let cliente in clientes) {
  listaDependentes.push(...clientes[cliente].dependentes);
}

// const listaDependentes = [
//   ...clientes[0].dependentes,
//   ...clientes[1].dependentes,
// ];

console.table(listaDependentes);
