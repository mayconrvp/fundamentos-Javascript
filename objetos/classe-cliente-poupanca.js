class Cliente {
  constructor(nome, cpf, email, saldo) {
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
  }
  depositar(valor) {
    this.saldo += valor;
  }
  exibirSaldo() {
    console.log(`Seu saldo é R$ ${this.saldo}`);
  }
}

class ClientePoupanca extends Cliente {
  constructor(nome, cpf, email, saldo, saldoPoup) {
    super(nome, cpf, email, saldo);
    this.saldoPoup = saldoPoup;
  }
  depositarPoupanca(valor) {
    this.saldoPoup += valor;
  }
}

const cliente1 = new ClientePoupanca(
  "André",
  "12345678912",
  "andre@gmail.com",
  200.0,
  100.2
);

console.log(cliente1);

cliente1.depositar(50);
cliente1.depositarPoupanca(50);
console.log(cliente1);
