//destrinchando melhor o método reduce()

const numeros = [43, 50, 65, 12]

//para o método são passados 2 argumentos, a function e o 0, a própria function necessita de dois argumentos por causa do reduce.
const soma = numeros.reduce(function (acum, atual) {
  return atual + acum
 }, 0)

 //mais simplificado ainda, com função declarativa, necessidade de 2 argumentos na função.... linha 5
 function operacaoNumerica(acum, atual) {
  return atual + acum
 }
 const somaDeclarativa = numeros.reduce(operacaoNumerica, 0)