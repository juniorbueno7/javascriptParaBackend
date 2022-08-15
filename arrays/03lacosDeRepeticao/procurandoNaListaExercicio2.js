// Aqui eu já tinha tido uma ideia sobre como fazer, vou tentar do meu jeito, depois faço um identico ao do 'professor'

const alunos = ['SemPernas','PedroBala','Professor','Grande','Gato','BoaVida','VoltaSeca']
const notas = [6,8,10,3,7,5,2]

let listaNomesNotas = [alunos,notas]

function verifica(nomeDoAluno){
  
  if(listaNomesNotas[0].includes(nomeDoAluno)){
    let  index = listaNomesNotas[0].indexOf(nomeDoAluno)
    return `A nota final do aluno ${nomeDoAluno} é ${listaNomesNotas[1][index]}`
  } else {
    return `${nomeDoAluno} não se econtra na lista`
  }
}

console.log(verifica('VoltaSeca'))