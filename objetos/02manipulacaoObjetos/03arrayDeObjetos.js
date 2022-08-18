//A propriedade se tornou um ARRAY de objetos, possibilitando a manipulação através dos métodos de array.
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
    afiliacao: "pet-filho",
  }]
}

//adicionando um objeto ao array dependentes.
cliente.dependentes.push({
  nome: "Kira",
  nascimento: "04/05/2018",
  afiliacao: "pet-filho"
})

//console.log(cliente)

//procurando dentro dos dependentes alguem que correspondo aquela data de nascimento.
const afiliadoMaisNovo = cliente.dependentes.filter(dependente =>
  dependente.nascimento == "04/05/2018"
)

//Retorna todo o objeto 
//console.log(afiliadoMaisNovo)

//retorna apenas o nome
//é necessário o [0] pois o filter retorna um array, por mais que nosso array tenha somente um indice, o [0], é necessário usar para conseguir acessar o objeto corretamente, sem o [0] não funciona.
console.log(afiliadoMaisNovo[0].nome)

