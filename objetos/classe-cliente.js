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

const cliente1 = new Cliente("André", "12345678912", "andre@gmail.com", 500.0);

cliente1.exibirSaldo();
