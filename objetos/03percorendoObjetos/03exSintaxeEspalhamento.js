const fichaGuerreiro = {
  nome: "Aragorn",
  classe: "guerreiro"
}
 
const equipoGuerreiro = {
  espada: "Andúril",
  capa: "capa élfica +2"
}

//assim os objetos continuam separados.
const guerreiro1 = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro1)

//desse jeito junta os dois objetos em um só.
const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

//Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que encontra novos valores com o mesmo nome de chave.

//se juntarmos 3 objetos que tenham chaves  iguais, só irá aparecer as chaves do último, pois sobrescreveu todas as outras

//isso pode ser utilizado perfeitamente com arrays também....

const numerosPares = [0,2,4,6]
const numerosImpares = [1,3,5]

const numeros = [numerosPares,numerosImpares]
console.log(numeros) //[ [ 0, 2, 4, 6 ], [ 1, 3, 5 ] ]

const numerosEspalhados = [...numerosPares,...numerosImpares]
console.log(numerosEspalhados) //[0, 2, 4, 6, 1, 3, 5]

//mais ex sintaxeEspalhamento.
const clientes = [
  {
    nome: "André",
    cpf: "12312312312",
    dependentes: [{
      nome: "Sara",
      parentesco: "filha",
      dataNasc: "20/03/2011"
     },
     {
      nome: "Samia",
      parentesco: "filha",
      dataNasc: "04/01/2014"
     }],
  },
  {
    nome: "Juliana",
    cpf: "56767867867",
    dependentes: [{
      nome: "Sophia",
      parentesco: "filha",
      dataNasc: "30/08/2020"
     }],
  }
 ]

 const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

 console.table(listaDependentes)