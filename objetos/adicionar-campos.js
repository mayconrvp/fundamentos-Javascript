//Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores

const cliente = {
  nome: "André",
  idade: 36,
  cpf: "12345678912",
  email: "andre@email.com",
};

console.log(cliente);

//Se determinada chave não exista no objeto, a chave é criada, atribuindo o valor;
//Porém se existir a chave, apenas o valor é alterado
cliente.fone = "91132325544";
console.log(cliente);
