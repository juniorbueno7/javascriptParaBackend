//conferir se o cliente tem alguma chave especifica
//utilizando métodos de objetos

const cliente = {
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
  saldo: 100,
  depositar: function (valor) {
    this.saldo = this.saldo + valor 
  },
} 

//método de objeto que retorna todas as chaves do objeto passado com argumento em sua execução
//precisa de uma nova variavel, por retorna essas chaves em um array.

//const chavesCliente = Object.keys(cliente)

//declarando função para ser utilizada com qualquer objeto.
function verificaDependentes(obj) {
  const chavesCliente = Object.keys(obj)
  if(chavesCliente.includes("dependentes")){ //método de array includes, verifica se o argumento está incluso no array (chavesCliente é o array de chaves do objeto)
    console.log(`O cliente ${obj.nome} possui dependentes.`)
  }
}

verificaDependentes(cliente)

//outro método de objeto
//retorna os valores das chaves
// console.log(Object.values(cliente))

//retorna um array de arrays, com a chave e o valor
//cada indice do array principal, é um array com a chave e o valor
//[0][0] (chave nome) [0][1] (valor juninho)
console.log(Object.entries(cliente))
