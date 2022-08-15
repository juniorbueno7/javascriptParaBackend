const cliente = {
  nome: 'Juninho', //chave / valor
  idade: 21,
  cpf: '12345678',
  email: 'juninho@email.com'
}

//somente as chaves que ja declaradas
console.log(cliente)

//adicionando chave
cliente.telefone = 51991752898

//chaves ja declaradas + chaves adicionanda
console.log(cliente)

//subistutui a chave anterior 
cliente.telefone = 9815333658
