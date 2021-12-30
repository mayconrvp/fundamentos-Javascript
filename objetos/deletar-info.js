const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
};

console.log(objPersonagem);

//REMOVER A PROPRIEDADE ALIADO
delete objPersonagem.aliado;
console.log(objPersonagem.aliado);

//REMOVER A PROPRIEDADE STATUS POR NOTAÇÃO DE PONTO
delete objPersonagem["status"];
console.log(objPersonagem);

/*
O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, 
retornará false se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso.
 */
