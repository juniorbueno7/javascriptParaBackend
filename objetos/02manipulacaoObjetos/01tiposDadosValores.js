const cliente = {
  nome: "juninho",
  apelido: "sabonete",
  idade: 21,
  cpf: "9876543216547",
  email: "juninho@email.com",
  fones: ["5578413134568","5546816315132"]
}

//imprimindo todos os dados do array
//arraow function
cliente.fones.forEach(fone => console.log(fone))

//function declarada
function imprimiTudo(fone){
  console.log(fone)
}

cliente.fones.forEach(imprimiTudo)

//acessando posição especifica
console.log(cliente.fones[1])
