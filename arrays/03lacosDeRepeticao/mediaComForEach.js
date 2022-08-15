//Jeito diferente de percorrer o array 

const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

//arrow function de um função recursiva
//não é utilizado um parâmetro "externo" para o funcionamento da função, LER SOBRE FUNÇÔES RECURSIVAS
//o nota (parametro) é o representante do nota[i] quando se percorre o array com for, porém como o método já avisa que é FOREACH elemento do array, nao precisamos especificar, o [i] do notas serve para referenciar o i >= 0; i <= notas.lenght..... referenciar de qual i estamos falando.
notas.forEach(nota => {somaDasNotas = somaDasNotas + nota})

//feito com função normal, ainda recursiva
// notas.forEach(function(nota){
//   somaDasNotas = somaDasNotas + nota
// })

let media = somaDasNotas/notas.length

console.log(media)