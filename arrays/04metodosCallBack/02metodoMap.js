
const notas = [10, 9, 8, 7, 6]
 
//metodo map() altera o array, precisamos declarar um novo array para utilizado
//O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado, diferente do forEach, que apenas itera e retorna o que tem dentro do array, o map retorna novos resultados, por isso a necessidade de uma nova váriavel atrelada a ele.
// const notasAtualizadas = notas.map(nota => nota + 1)
// console.log(notasAtualizadas)

//a nota nao pode ser maior que 11
//pode ser feito perfeitamente com ternário.. (obvio) 
const notasAtualizadas = notas.map(nota => {
  if(nota >= 10){
    return nota
  } else {
    return nota = nota + 1 
  }
})

//assim também funciona, obviamente...

// function teste (nota){
//   if(nota >= 10){
//     return nota
//   } else {
//     return nota = nota + 1 
//   }
// }

console.log(notasAtualizadas)