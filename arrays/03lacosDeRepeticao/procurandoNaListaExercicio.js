//Fiz isso antes de ver a videoAula, sem o conhecimento do método includes, posteriormente volto aqui e tento resolver 09/07 - sab 

const alunos = ['SemPernas','PedroBala','Professor','Grande','Gato','BoaVida','VoltaSeca']
const notas = [6,8,10,3,7,5,2]

let vetorFinal = [alunos,notas]

function verifica(nome){

  for(i = 0; i <= vetorFinal[0].length; i++){
    if(nome === vetorFinal[0][i]){
      let indexNome = i
      return vetorFinal[1][indexNome]
    
    } else {
      return 'teste'
    } 
  } 
}
console.log(verifica('Grande'))