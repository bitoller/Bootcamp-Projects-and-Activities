/*1- Desenvolva uma função chamada verticalText, que receberá um parâmetro:
1. String, que será uma palavra.
Deverá imprimir a palavra usando o console.log de forma vertical.*/
/*
function verticalText(string) {
  let i = 0;
  while (i < string.length) {
    console.log(string[i]);
    i++;
  }
}
verticalText("Frontend");
*/
/*2- Desenvolva uma função chamada incrementText, que receberá um parâmetro:
1. String, que será uma palavra.
e deverá imprimir a palavra usando o console.log de forma que ela vai se
incrementando, começando somente pela primeira letra, depois a primeira e a
segunda e assim sucessivamente conforme exemplo.*/
/*
function incrementText(string) {
  let i = 0;
  let word = "";
  while (i < string.length) {
    word += string[i];
    console.log(word);
    i++;
  }
}
incrementText("Backend");
*/
/*3- Desenvolva uma função chamada incrementTextBackwards, que receberá um parâmetro:
1. String, que será uma palavra.
Deverá imprimir a palavra usando o console.log de forma que ela vai se
incrementando ao contrário, começando somente pela última letra,
depois a última e a penúltimo e assim sucessivamente conforme exemplo.*/
/* 
function incrementTextBackwards(string) {
  let i = string.length - 1;
  let backwardsWord = "";
  while (i >= 0) {
    backwardsWord = string[i] + backwardsWord;
    console.log(backwardsWord);
    i--;
  }
}
incrementTextBackwards("Fullstack");
*/
/*4- Desenvolva uma função chamada padEnd, que receberá três parâmetros:
1. String, que será uma palavra.
2. Number, a quantidade da repetição do caractere.
3. String, o caractere de repetição.
Sua função deverá retornar a string preenchida com o caractere de acordo com
o comprimento passado por parâmetro.*/
/* 
function padEnd(word, number, repetitionString) {
  let string = "";
  let i = 0;
  while (i < number) {
    string += repetitionString;
    i++;
  }
  return word + string;
}
let padKenzie = padEnd("Kenzie", 5, "foo");
let padKata = padEnd("Kata", 8, "*");
console.log(padKenzie, padKata);
*/
/*5- Desenvolva uma função chamada subString, que receberá três parâmetros:
1. String, a palavra
2. Number, a posição inicial
3. Number, a posição final​
Sua função deverá retornar parte da string **entre** o início e o fim dos
indices passadas por parâmetro (não inclui os caracteres dos indices).*/
/* 
function subString(word, iniPosition, endPosition) {
  let i = iniPosition + 1;
  let string = "";
  while (i < endPosition) {
    string += word[i];
    i++;
  }
  return string;
}
let mozillaString = subString("Mozilla", 0, 4);
let chromeString = subString("Chrome", 3, 5);
console.log(mozillaString, chromeString);
*/
/*6- Desenvolva uma função chamada stringRepeater, que receberá dois parâmetros:
1. String, a palavra
2. Number, a quantidade de repetição
Sua função deverá retornar uma nova string que contem o número especificado
de cópias concatenadas da palavra passada por parâmetro.*/

function stringRepeater(word, repetition) {
  let i = 0;
  let string = "";
  while (i < repetition) {
    string += word;
    i++;
  }
  return string;
}
let happyString = stringRepeater("Because I'm happy. ", 3);
console.log(happyString);

/*7- Desenvolva uma função chamada stringCentralizer, que receberá três parâmetros:​
1. String, que é a palavra
2. Number, a quantidade da repetição do elemento
3. String, o elemento de repetição​
Sua função deverá retornar uma nova string que contem a palavra passada
por parâmetro centralizada entre os elementos de repetição com um espaço
em branco nas laterais e a quantidade exata passada por parâmetro.*/
