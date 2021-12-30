/**
 * Vimos que quando um objeto JavaScript é criado ele tem propriedades particulares (por exemplo, nome, cpf ou email) e também outras propriedades herdadas do protótipo.

Além do nome e do valor, cada propriedade tem também três atributos:

Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for...in ou utilizando Object.keys() / Object.values() / Object.entries(). Ou seja, se a propriedade é enumerável;
Configurable: Especifica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável.
 
O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf e email) e que não são herdadas do protótipo.
*/

const catalogo = {
  editora: "Casa do Código",
  catalogo: [
    {
      id: 50,
      titulo: "Primeiros Passos com NodeJS",
      autor: "João Rubens",
      categoria: "programação",
      versoes: ["ebook", "impresso"],
    },
  ],
};

//o método Object.getOwnPropertyDescriptor() descreve os atributos da propriedade editora
console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"));

/*
Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; 
objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; 
Objetos criados com Object.create()recebem como prototype o primeiro parâmetro da função - que pode ser null.
*/
