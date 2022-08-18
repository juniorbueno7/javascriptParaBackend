//Adicionando uma propriedade que permita ações ao cliente, para serem feitas "operações bancárias"

const cliente = {
  nome: "juninho",
  apelido: "sabonete",
  idade: 21,
  cpf: "9876543216547",
  email: "juninho@email.com",
  fones: ["5578413134568","5546816315132"], //a propriedade é um aray
  dependentes: [{ //transformando a propriedade dependentes em um array de objetos.
    nome: "scooby-naninha",
    nascimento: "18/08/2010",
    afiliacao: "pet-filho"},
    { 
    nome: "Kira",
    nascimento: "04/05/2018",
    afiliacao: "pet-filho"
  }],
  saldo: 100, //propriedade do objeto, tudo normal
  depositar: function (valor) {
    this.saldo = this.saldo + valor //this faz referencia ao proprio objeto
    //this.saldo += valor 
    //continua no estilo chave: valor (depositar: function (no lugar de um dado primitivo))
  },
} 

console.log(cliente.saldo) //100
cliente.depositar(50) 
console.log(cliente.saldo) //150

//funções são utilizadas para dar ações aos objetos.
//são denominadas métodos, pois trabalham no contexto do objeto.


