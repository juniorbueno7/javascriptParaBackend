
//sem parâmentro e sem retorno
function cumprimentar(){
  console.log('oi gente!')
 }
 cumprimentar()

 
 //com parâmetro sem retorno
 function cumprimentar2 (pessoa){
  console.log(`Oi, ${pessoa}`)
 }
 cumprimentar2('Claudinho')


 //sem parâmetro com retorno
 function cumprimentar3(){
  return 'Oi gente!'
 }


 //com parâmetro sem retorno e chamando outra função
 function cumprimentar4(NomePessoa){
  console.log(`${cumprimentar3()}, meu nome é ${NomePessoa}`)
 }
 cumprimentar4('Juninho')
 
 

 //mais de um parâmetro e retorno
 function somaMatematica(n1,n2,n3){
    return n1 + n2 + n3
 }
 console.log(somaMatematica(10,20,30))

 