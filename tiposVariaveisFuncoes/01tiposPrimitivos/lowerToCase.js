
//O JS diferencia letra maiscula e miniscula tanto na digitação do código Math.round != math.round quanto nos valores dos dados

const cidade = "juninholandia";
const input = "JuninhoLandia";

console.log(cidade === input); //Retorna false

const cidade1 = "abravalandia";
const input1 = "AbravaLandia";
const inputLowerCase = input1.toLowerCase();

console.log(cidade1 === inputLowerCase); //Retorna true

//Contando caracteres da string
const senha = "cinco"
console.log(senha.length)
