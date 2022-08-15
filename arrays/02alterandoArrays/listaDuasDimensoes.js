//Lista de duas dimensões
//Concatenar duas listas existentes, uma de alunos e outra de médias.

const alunos = ['João','Juliana','Caio','Ana']
const mediaDosAlunos = [10,7,9,6]
//Criamos um vetor de váriaveis de vetores
let listaDeNotasEAlunos = [alunos,mediaDosAlunos]

//Usamos o novo vetor de vetores para acessarmos os dados dos vetores originais
//${listaDeNotasEAlunos[alunos][indice0]}             ${listaDeNotasEAlunos[mediaDosAlunos][indice0]}
console.log(`${listaDeNotasEAlunos[0][0]}, sua média é ${listaDeNotasEAlunos[1][0]}`)



