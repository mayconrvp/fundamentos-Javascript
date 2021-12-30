const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678912",
  email: "andre@email.com",
};

const chaves = ["nome", "idade", "cpf", "email"];

//Notação de colchetes
console.log(cliente[chaves[0]]);

chaves.forEach((info) => {
  console.log(cliente[info]);
});
