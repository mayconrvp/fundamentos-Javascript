//Métodos para strings

//.length

/**A propriedade length serve para nos informar o tamanho de uma string. E por que isso é útil?
Caso sua aplicação tenha como uma das regras para criação de senhas (que em geral são alfanuméricas) o tamanho de 8 caracteres, usar length será uma boa opção, pois ajudará a contar a quantidade de caracteres da string.
Para testar a propriedade length, vamos usar a string alura, que retornará o tamanho 5. */

const palavra = "alura";
console.log(palavra.length); //5

/*
charAt

Com o método charAt() conseguimos acessar um caractere de uma string. Lembre-se que, por baixo dos panos, 
strings são arrays de caracteres, e em cada posição temos o caractere que compõe a string.
*/

console.log("alura".charAt(3)); //r
const palavra = "Alura";
console.log(palavra[0]); //A

/**
 indexOf
*
A função indexOf() retorna a posição de um caractere dentro da string.
Porém, na utilização do indexOf(), fique atento caso o caractere que se busca na string seja encontrado em mais de uma posição, pois será retornada somente a primeira ocorrência.
 */
const palavra = "Alura";
console.log(palavra.indexOf("a")); //4

const palavra = "Divertidamente";
console.log(palavra.indexOf("e")); //3

/*
 * toUpperCase() e toLowerCase()

São duas funções bastante utilizadas quando estamos trabalhando com string e precisamos deixar o texto todo em letras minúsculas (lower case) ou todo em maiúsculas (upper case).
 */

const palavra = "alura";
console.log(palavra.toUpperCase()); //ALURA
console.log(palavra.toLowerCase()); //alura

/*
 * substr()
 
Outra função muito interessante é a substr() (substring), que permite que façamos a extração de parte de uma string.
A função recebe como parâmetro o início e o fim da nova string a ser retirada da string principal. 
O resultado da execução do método substr() é uma nova string .
 */

let frase = "Mergulhando em tecnologia.";
console.log(frase.substr(0, 11)); // Mergulhando

/*
 * slice()

Podemos utilizar também o método slice(), que usamos com arrays. 
Ele é similar ao substring() e retornará parte de uma string, desde que passemos nos parâmetros o índice de início e de fim
 */

let frase = "Mergulhando em tecnologia.";
console.log(frase.slice(0, 11)); // Mergulhando

/*
 * replace()

Com a função replace() temos a possibilidade de substituir parte de uma string por outra. 
Essa função recebe como parâmetros duas informações: a string que você quer substituir e a string que será colocada no lugar.
*/

let nome = "André";
let comunicacao =
  " Olá, sr. nomeusurario, informamos que a partir da presente data o senhor tem 50% de desconto em nossa loja.";
console.log(comunicacao.replace("nomeusurario", nome));

/*
 *concat()

 O método concat() é uma opção para concatenar strings sem a utilização do operador de adição (+). Ele concatena duas strings, adicionando a nova string ao fim da anterior.
*/
let novaString =
  "Programe nas principais linguagens e plataformas. Explore linguagens como ";
console.log(
  novaString.concat("JavaScript,").concat(" Python,").concat(" e C#.")
);

/*
 *split()

O método split() é bem interessante, pois com ele conseguimos quebrar uma string com base em caracteres separadores que vamos informar para o método como parâmetro.
*/
let linguagens = "JavaScript;Java;C#;PHP;Python;Go;Vb;SQL;C;C++";
let arrayLinguagens = linguagens.split(";");
console.log(arrayLinguagens);
//[ 'JavaScript','Java','C#','PHP','Python','Go','Vb','SQL','C','C++' ]

/*
 * trim()

O trim() remove os espaços em branco no início ou fim de uma string. 
Se em alguma situação precisarmos fazer uma verificação de que o usuário não digitou o login com espaços, faremos;
No JavaScript ainda temos algumas variações desta função como: trimEnd(),trimStart(),trimLeft() e trimRight()
*/

let login = "   andre@emailteste.com      ";
let loginSemEspaco = login.trim();
console.log(loginSemEspaco); //andre@emailteste.com
