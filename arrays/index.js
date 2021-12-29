// let nota1 = 10;
// let nota2 = 6.5;
// let nota3 = 8;
// let nota4 = 7.5;

//let media (nota1 + nota2 + nota3 + nota4)/4;

const notas = [10, 6.5, 8, 7.5];
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

const numeros = [50, 43, 12];

const arrayVazia = [, , ,];
console.log(arrayVazia.length);
arrayVazia.push(50);
console.log(arrayVazia);
console.log(arrayVazia.length);

// function rps(p1, p2) {
//   let win;
//   if (p1 === p2) return "It's a draw";
//   switch (p1) {
//     case "Rock":
//       if (p2 === "Scissors") return "The winner is p1";
//       return "The winner is p2";
//       break;
//     case "Scissors":
//       if (p2 === "Paper") return "The winner is p1";
//       return "The winner is p2";
//       break;
//     case "Paper":
//       if (p2 === "Rock") return "The winner is p1";
//       return "The winner is p2";
//       break;
//   }
// }

// function isAvgWhole(arr) {
//   let avg;
//   let soma = 0;
//   for (let i = 0; i < arr.length; i++) {
//     soma += arr[i];
//   }
//   avg = soma / arr.length;
//   if (avg % 2 == 0) return true;
//   return false;
// }

// var reverse = function (x) {
//   let lastDigit = 0;
//   let reverseNum = 0;

//   while (x !== 0) {
//     lastDigit = x % 10;
//     reverseNum = reverseNum * 10 + lastDigit;
//     x = parseInt(x / 10);
//   }
//   //if (x < 0) reverseNum = reverseNum * -1;

//   return reverseNum;
// };

// console.log(reverse(-1234));
