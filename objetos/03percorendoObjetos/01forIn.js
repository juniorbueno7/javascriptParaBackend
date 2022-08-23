//percorrer o objeto, que não é uma lista ordenada igual a um array, e imprimir os dados sobre
//de forma automatizada para podermos manipulalas

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
//funções são utilizadas para dar ações aos objetos.
//são denominadas métodos, pois trabalham no contexto do objeto.

//utlizaremos o método do js feito para objetos, for in, para percorrermos o obj.

let relatorio = '';

//let info = chaves do objeto
// for (let info in cliente) {
//   relatorio = relatorio + `${info}`
// }
//console.log(relatorio) //nomeapelidoidadecpfemailfonesdependentessaldodepositar (passou todas as chaves acumuladas uma na outra)


//  for (let info in cliente) {
//     relatorio = relatorio + ` - ${cliente[info]}` // passou todos valores das chaves (os primitivos, os arrays, os arrays de objeto, e a chave/propriedade função.)
// }
// console.log(relatorio) // imprimiu tudo, até os comentários


for (let info in cliente) {
  if (typeof cliente[info] === "object" || typeof cliente[info] === "function"){ // ignorando o que não é dado primitivo 
              //utilizamos notação de colchetes cliente[info] pois queremos percorrer por todas as chaves, portanto nao podemos usar notação de ponto.
    continue //método do javascript para passar reto pelo oq nao queremos

  } else {
  
  relatorio = relatorio + ` ${info} => ${cliente[info]} \n`} // passando a chave e o valor de forma "formatada"
  //a linha pode ser quebrada dando enter apos a ` (templateString admite quebra de linha)


}

console.log(relatorio)


