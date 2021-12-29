const salaPython = ["Melissa", "Helena", "Rodrigo"];
const salaJavascritp = ["Ana", "Sérgio", "Juliana", "Raquel"];

const salasUnificadas = salaPython.concat(salaJavascritp);
console.log(salasUnificadas);
console.log(salaJavascritp.concat(salaPython));

// concat() é um método útil quando não se deseja alterar o array original, e sim fazer uma cópia alterada. Caso isso não seja necessário, considere utilizar push() ou splice() para inserir novos elementos ou fazer alterações no array original.
