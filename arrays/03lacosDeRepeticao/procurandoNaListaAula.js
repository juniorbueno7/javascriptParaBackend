const alunos = ['SemPernas','PedroBala','Professor','Grande','Gato','BoaVida','VoltaSeca']
const notas = [6,8,10,3,7,5,2]

let listaNomesNotas = [alunos,notas]

const verificaNome = (nomeDoAluno) => {
  if(listaNomesNotas[0].includes(nomeDoAluno)){
    let index = listaNomesNotas[0].indexOf(nomeDoAluno)
    return `${listaNomesNotas[0][index]}, sua nota é ${listaNomesNotas[1][index]}`
  
  } else {
    return 'Alunx não cadastrado'
  }
}

console.log(verificaNome('Gato'))

//includes() retorna booleano 