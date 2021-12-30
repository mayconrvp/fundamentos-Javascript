//
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
    {
      nome: "João Paulo",
      parentesco: "filho",
      dataNasc: "26/04/2001",
    },
  ],
  saldo: 100,
  depositar: function (valor) {
    this.saldo += valor;
  },
  sacar: function (valor) {
    valor <= this.saldo ? (this.saldo -= valor) : this.saldo;
  },
};

function oferecerSeguro(obj) {
  const propsClientes = Object.keys(cliente);
  if (propsClientes.includes("depedentes")) {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }
}

console.log(Object.values(cliente));
console.log(Object.entries(cliente));
