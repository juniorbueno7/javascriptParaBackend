const cliente = {
  nome: "juninho",
  apelido: "sabonete",
  idade: 21,
  cpf: "9876543216547",
  email: "juninho@email.com",
  fones: ["5578413134568","5546816315132"]
}

//propriedade atrelada ao objeto cliente
//propriedade dependentes = objeto
cliente.dependentes = {
  nome: "scooby-naninha",
  idade: 85,
  afiliacao: "pet-filho",
}

console.log(cliente)

//alterando valor da propriedade da propriedade-objeto
cliente.dependentes.nome = 'scooby-naninha-primeiro'
console.log(cliente)

//acrescentando propriedade a propriedade-objeto
cliente.dependentes.cor = "branco"
console.log(cliente)