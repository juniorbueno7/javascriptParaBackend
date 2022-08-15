const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediasNotas(arrayDeNotas) {
  let somaArray = arrayDeNotas.reduce((cont, atual) => cont + atual, 0)
  return somaArray/arrayDeNotas.length 
}

console.log(`SalaJS: ${mediasNotas(salaJS)}`)
console.log(`SalaJava: ${mediasNotas(salaJava)}`)
console.log(`SalaPython: ${mediasNotas(salaPython)}`)