
const notas = [10, 6, 8];

notas.push(7)//Método de array já pronto do javascript. 
//Uma função que requer um parâmetro. (no estilo fila, acrescenta o elemento no final da lista) 
console.log(notas)

let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length 
console.log(media)
////////////////////////////////////////////////////////////////////////////////////////////////
// const notas = [10, 6, 8];
// notas.push()
// //sem o  parâmetro do método o console.log (17) retorna NaN, pq o notas[3] (16) é interpretado como undefined, sendo assim incapaz de completar a média, que retorna NaN.
// console.log(notas)

// let media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length 
// console.log(media)
