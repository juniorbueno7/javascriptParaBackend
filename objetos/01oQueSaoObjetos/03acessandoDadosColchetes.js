const cliente = {
  nome: 'Juninho', //chave / valor
  idade: 21,
  cpf: '12345678',
  email: 'juninho@email.com'
}

//NOTAÇÃO DE COLCHETES
//serve para acessar o dado do objeto atráves de uma variável ou uma posição em um array.

//acessando dados através de uma lista de chaves
const chaves = ["nome","idade","cpf","email"]
console.log(cliente[chaves[0]])

//acessando dados através de uma variável, basicamente a mesma coisa da anterior
const chave = "nome"
console.log(cliente[chave])

//console.log(cliente.chave)
//notação de ponto nao funciona com váriavel, por motivos óbivos
//o JS entra no objeto cliente, e procura a chave chamada chave, não acha e retorna erro.

//imprimindo todos os valores das chaves do objeto.
//arrow function
chaves.forEach(info => console.log(cliente[info]))



//função declarada
function imprimiTudo(info) {
  return console.log(cliente[info])
}

chaves.forEach(imprimiTudo)

//notação de colchetes também pode ser acessada deste jeito.
console.log(cliente["nome"])