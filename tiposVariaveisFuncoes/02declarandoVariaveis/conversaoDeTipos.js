
//CONVERSÃO IMPLÍCITA 
//permite converter um dado em outro, number-string; string-number

const numero = 456; //númmero
const numeroString = "456"; //texto que representa um número 

console.log(numero === numeroString) //retorna false, 3 iguais equivale a valor e tipo de dado.
console.log(numero == numeroString)  //retorna true, 2 iguais equivale a valor apenas (o JS converte o número para string para conseguir fazer essa comparação, (conversão implícita...))
console.log(numero + numeroString)  //apenas concatena porque o const numero é convertido para string.
 
//CONVERSÃO EXPLICITA

console.log(numero + Number(numeroString)) 
// poderia ser feito assim (const numeroString = Number("456");) 

//Number() = para transformar uma string num number.
  // Vamos calcular a área de um retângulo
  let largura1 = "10";
  let altura1 = "5";
  console.log(Number(largura1) * Number(altura1)); // teremos a conversão de String para números, possibilitando a realização da da multiplicação

  let largura = "10";
  let altura = "5";
  console.log( + largura * + altura); // teremos a co nversão de String para números realizado usando o + antes das variáveis

  let meuNome = "leonardo";
  console.log(Number(meuNome)); // como a variável meuNome não contém apenas números ele retorna o erro NaN (Not a Number, não é número);
  console.log( + meuNome); // a conversão também retornará NaN

  let usuarioConectado1 = false;
  console.log(Number(usuarioConectado1)); // teremos a conversão da booleana para número, sendo que false (falso) retorna o número 0.
  usuarioConectado1 = true;
  console.log(Number(usuarioConectado1)); // agora teremos a conversão de true (verdadeiro) para o número 1.

//String() = para transformar um number numa string.

  let telefone1 = 12341234;
  console.log("O telefone é " + String(telefone1)); // teremos a conversão do número 12341234 para uma string “12341234” e assim poderemos fazer a concatenação entre as strings

  let telefone = 12341234;
  console.log("O telefone é " + telefone.toString()); // o .toString() é uma outra forma para  fazer essa conversão, que é mais parecida com outras linguagens de programação.

  let usuarioConectado = false;
  console.log(String(usuarioConectado)); // teremos a conversão da booleana para string, nesse caso teremos uma string “false”.
  usuarioConectado = true;
  console.log(String(usuarioConectado)); // agora teremos uma string “true”.