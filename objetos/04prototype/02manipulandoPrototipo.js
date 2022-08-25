//A partir do cliente que ja existe, e criar uma nova modalide de cliente a partir dele.

//importando o objeto 
const Cliente = require('./01propriedadesPrototipo');

function ClientePoup(nome,cpf,email,saldo,saldoPoup){
  //indicando que o ClientePoup vai herdar todas as propriedades, que forem passadas como argumento (nao precisar ser necessariamente todas), do objeto Cliente.
  //não entendi o this no argumento do call.
  Cliente.call(this,nome,cpf,email,saldo)
  this.saldoPoup = saldoPoup
  //saldoPoup vai fora porque ele é uma propriedade do ClientePoup, não está sendo trazido do Cliente.
}

const novoCliente = new ClientePoup("claudio",5456478510,"claudio@email.com",100,100)

//adicionando um novo método(propriedade funçao)
//nao entendi EXATAMENTE a que caminho leva o prototype nesse contexto.
ClientePoup.prototype.depositarPoup = function(valor){
  this.saldoPoup = this.saldoPoup + valor
}

novoCliente.depositarPoup(30)
//console.log(novoCliente.saldoPoup)

//PROTOTYPE
//Alternativa correta! Muito bem! É isso mesmo, através da propriedade prototype que acessamos o protótipo de um objeto para manipulá-lo, podendo adicionar propriedades e funções. Novos objetos criados herdarão essas características e comportamentos diretos do protótipo.
