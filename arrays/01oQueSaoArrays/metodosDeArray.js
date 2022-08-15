
const notas = [10, 17, -2, 3, 4, 56, 25, 98, 1, 2 ,3]
const notas2 = [100, 200, 300]

notas.push(18) //acrescenta o parâmetro
notas.pop() //retira o ultimo do array 


//MÉTODOS DE ARRAYS PRÉ DEFINIDOS PELO JS. 

//concat ()
//concatena dois arrays
const concatenado = notas.concat(notas2)


//filter ()
//Retorna uma lista que passou pelo teste da função (17) 
 function maiorQue(elemento) {
   return elemento >= 55;
}

let listaFilter = concatenado.filter(maiorQue)


//find ()
//Retonar o PRIMEIRO elemento que passou pelo teste da função
 function procura(elemento){
  return elemento === 300;
 }

let listaFind = concatenado.find(procura);

//Jeito mto mais simples de ser feito através de express/arrow function.
let listaFindArrow = concatenado.find(elemento => elemento > 98);


//findIndex()
//mesma coisa que o find, mas retorna o indice no lugar do elemento 
let listaFindIndex = concatenado.findIndex(procura)

//Jeito mto mais simples de ser feito, através de express/arrow function.
//let listaFindIndex = concatenado.findIndex(elemento => elemento === 300)


//indexOf()
//Retorna o indice do elemento que é passado como parâmetro
let listaIndexOf = concatenado.indexOf(4)


//lastIndexOf()
//Retorna o primeiro indice onde começa a palavra
//diz que ele procura de trás pra frente, mas não entendi essa parte.

// let text = "Hello planet earth, you are a great planet.";
// let result = text.lastIndexOf("earth");
// console.log(text.length)
// console.log(result)


//forEach()
//Faz a função designada para cada item do array;
//é basicamente um for que percorre o array automaticamente, de forma mais funcional e polida.

let redesSociais = ['twitter', 'instagram', 'zap', 'face', 'youtube']

//para cada item do array executa a função de callback (ainda não sei exatamente oq é isso)
//3 parâmetros, 2 opcionais
//1° => redeSociaL (item atual que está sendo iterado)
//2° => indice do item que está sendo iterado
//3° => e a cultura completa, o array inteiro 

// redesSociais.forEach((redeSociaL, index, array) => {
//   console.log(index, redeSociaL, array)
// }) 

//declarando função que até então não tem nada a ver com nada, o proposito é so replicar um console.log com uma variável
const redeAcessada = (redeSocialAcessada) => {
  console.log(`A rede social ${redeSocialAcessada} foi acessada com sucesso.`)
};
                    //arrow function
redesSociais.forEach((item, posicao) => { //passando como parâmetro do for each, uma arrow function com váriaveis "pre-determinadas" pelo JS, item (elemento) posicao(indice)
  redeAcessada(item); // chamando a function e passando como argumento o elemento do array que tá na variável item.
  console.log(`A rede posição é ${posicao}`)
})


//shift()
//Retira o primeiro elemento do array e realoca os elementos nos indices 
// console.log(redesSociais)
// redesSociais.shift()
// console.log(redesSociais)


//unshift()
//Acrescenta no primeiro elemento do array e realoca os elementos nos indices
// console.log(redesSociais)
// redesSociais.unshift('8')
// console.log(redesSociais)


//reduce()
//Recebe uma função como argumento, e a executa array.lenght vezes 
//Usar quando precisa reduzir o array a um único número 

let arrayParaSoma = [5, 10, 20, 30, 89, 15, 36, 79, 10, 63, 33, 41 ]

let somaArray = arrayParaSoma.reduce((contador, numero) => contador + numero, 0)
//Contador começa com aquele último 0 lá
//numero é o current do array
//Return contador + número para o contador 

//Com array de objetos 
const rockets = [
  { pais: 'Rússia', lancamentos: 32 },
  { pais: 'USA', lancamentos: 23},
  { pais: 'China', lancamentos: 16},
  { pais: 'Inglaterra', lancamentos: 7},
  { pais: 'India', lancamentos: 4},
  { pais: 'Japao', lancamentos: 3}]

let totalLancamentos = rockets.reduce((valorAnterior, valorAtual) => valorAnterior + valorAtual.lancamentos, 0)


//reduceRight()
//Mesma coisa do reduce, porém da direita para a esquerda


//reverse()
//reverte a ordem do array, o primeiro elemento passa a ser o ultimo e vice-versa 
//modifica o array original...  
//let arrayRevertido = arrayParaSoma.reverse()


//slice()
//retorna uma parte de um array em um novo array, utilizando como argumento o inicio e fim, usando indice como base
//ele começa no inicio e termina no fim-1, se por 
// let arrayAosPedacos = arrayParaSoma.slice(0,3)
// console.log(arrayAosPedacos)


//splice()
//remove os elementos, o 1° argumento é o inicio, o 2° argumento é quantos elementos apartir do 1° arg ele quer remover 
// arrayParaSoma.splice(0,4)
// console.log(arrayParaSoma)

//Passa para uma variável apenas os deletados 
//let deletados = arrayParaSoma.splice(0,4)
//console.log(deletados)

//Removeu entre 0 e 5, e acrescentou o 100 a partir do 5-1 
// let acrescentando2 = arrayParaSoma.splice(0,5,100)
// console.log(acrescentando2)
// console.log(arrayParaSoma)

//Nao removeu, pq o segundo argumento é 0
//Começou a acrescentar qualquer número a partir do 2° indice;
let acrescentando2 = arrayParaSoma.splice(2,0,100)
console.log(acrescentando2)
console.log(arrayParaSoma)