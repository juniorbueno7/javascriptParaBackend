const cliente = {
  nome: 'Juninho', //chave / valor
  idade: 21,
  cpf: '12345678',
  email: 'junihno@email.com'
}

//usando notação de ponto para acessar valores do objeto;
//objeto.chave = valor
console.log(`nome do cliente: ${cliente.nome}; \nidade do cliente: ${cliente.idade};`)

//utilizando método subsstring para mostrar apenas primeiros caracteres do cpf;
//os argumentos são o indice de inicio, que é incluido, e o indice de final, que não é incluido.
console.log(`cpf do cliente: ${cliente.cpf.substring(0,3)};`)