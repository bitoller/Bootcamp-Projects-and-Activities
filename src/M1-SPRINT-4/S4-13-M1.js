/*1- Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres.
Insira o valor recebido em um array e retorne o array gerado.*/
/*
function stringValue(word) {
  let myArray = [word];
  return myArray;
}
let toShow = stringValue("Bianca");
console.log(toShow);
*/
/*2- Escreva uma função que recebe um valor do tipo number.
Use o valor recebido para acessar uma posição do seguinte array:
let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠
Caso a posição exista, retorne o nome que se encontra nela.
⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".*/
/*
function numberValue(number) {
  let myArray = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"];
  if (number >= 0 && number <= 3) {
    return myArray[number];
  } else {
    alert("Valor não encontrado");
  }
}
let toShow2 = numberValue(4);
console.log(toShow2);
*/
/*3- Crie um array de números, contendo os valores de 1 a 10.
Crie uma função que recebe um número inteiro.
Acesse a posição do array de números usando o valor recebido.
Teste se o valor contido na posição é par ou ímpar.
Caso seja par retorne: "O valor encontrado nesta posição é par",
Caso seja ímpar retorne: "O valor encontrado nesta posição é ímpar".*/
/*
let wholeNumber = parseInt(prompt("Digite um número inteiro"));
function numberValue2(number) {
  let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(number);
  if (numbersArray[number] % 2 == 0) {
    return "O valor encontrado nesta posição é par";
  } else {
    return "O valor encontrado nesta posição é ímpar";
  }
}
let toShow3 = numberValue2(wholeNumber);
console.log(toShow3);
*/
/*4- Dado o array de nomes:
⁠let nomes = ["Pedro", "Rafael", "José"]⁠
Crie uma função que recebe a lista de nomes como parâmetro.
A função deve verificar qual dos nomes da lista tem a maior quantidade
de caracteres e retornar o nome.
Teste cada posição usando estrutura de repetição,
a menos que a lista tenha apenas um valor inserido.
Use este formato: "O nome x é o maior da lista";*/
/*
function list(nameList) {
  let nameList = ["Pedro", "Rafael", "José"];
  let wordSize = "";
  for (let i = 0; i < nameList.length; i++) {
    wordSize = nameList.length;
  }
}
*/
/*5- Dado o array de números como exemplo:
⁠numeros = [1,4,6,9,11,8]
Escreva uma função que recebe a lista de números como parâmetro.
A função deve realizar a soma dos valores das duas últimas posições
da lista e armazenar o valor da soma em uma variável.
Use a variável para testar se o valor da soma é um múltiplo de 2.
Se sim, retorne: "A soma é um múltiplo de 2".
Caso contrário: "A soma não é um múltiplo de 2"*/

/*6- Dado o array de nomes como exemplo:
⁠let nomes = ["Pedro", "Rafael", "José", "Carla", "Maria", "Josef", "Raquel"]⁠
Escreva uma função que recebe como parâmetros a lista de nomes, um nome (string)
e um valor inteiro (number) para representar a posição.
Acesse a lista na posição que corresponde ao valor inteiro recebido
e armazene o valor contido na posição em uma variável.
Teste se o nome recebido pela função como parâmetro é o mesmo que o armazenado na variável.
Lembre-se de normalizar os dados antes de testar.
Caso os valores sejam iguais, retorne: "Acertei".
Caso não sejam, retorne: "Não é quem eu pensava"*/

/*7- Dado dois arrays numéricos como exemplo.
⁠let numeros = [1,2,3,4,5,6,10]
⁠let outrosNumeros = [5,7,9,4,2,3,9]
Escreva uma função que recebe as duas listas de números como parâmetro.
A função deve conseguir identificar qual dos dois arrays é o maior.
Após identificar o maior array, retorne o último elemento do array.
Use este formato: "A maior lista é a lista cujo último número é: x"*/