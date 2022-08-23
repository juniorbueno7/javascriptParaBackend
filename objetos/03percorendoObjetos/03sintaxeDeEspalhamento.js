const clientes = [{
  nome: "juninho",
  apelido: "sabonete",
  idade: 21,
  cpf: "9876543216547",
  email: "juninho@email.com",
  fones: ["5578413134568","5546816315132"], 
  dependentes: [{ 
    nome: "scooby-naninha",
    nascimento: "18/08/2010",
    afiliacao: "pet-filho"},
    { 
    nome: "Kira",
    nascimento: "04/05/2018",
    afiliacao: "pet-filho"
  }],
},
{
  nome: "claudio",
  apelido: "banha",
  idade: 21,
  cpf: "381741524152124",
  email: "banha@email.com",
  fones: ["7521527815287","158775181758"], 
  dependentes: [{ 
    nome: "eva",
    nascimento: "28/04/2016",
    afiliacao: "mae"},
    { 
    nome: "Nicholas",
    nascimento: "09/03/2007",
    afiliacao: "irmao"
  }],
}]

//é utilizado colchetes e indices pois 'clientes' se trata de um array de objetos.
const listaDependentes =  [...clientes[0].dependentes,...clientes[1].dependentes]

//sintaxe de espalhamento => ...
//basicamente tira a informação de onde ela ta e atira pra dentro de um array (???)

console.log(listaDependentes) // listaDependentes = array de objetos com chaves e valores de dependentes.

//chaves viram colunas, valore viram linhas 
console.table(listaDependentes)

