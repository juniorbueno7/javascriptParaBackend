const listaDeChamada = ['João','Ana','Caio','Lara','Marjorie','Leo']

//começa removendo em ana, e remove mais dois pra frente, entao remove ana e o caio
//essa é a função do 2° argumento, a quantidade de elementos a partir do 1°
//3° argumento é para acrescentar

//apagando 2 e acrescentado 1 
//listaDeChamada.splice(1,2,'Rodrigo')
//sem apagar, somente acrescentar 
listaDeChamada.splice(2,0,'Rodrigo')
console.log(listaDeChamada)