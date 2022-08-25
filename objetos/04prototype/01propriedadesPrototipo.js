//Função que permita a criação de novos clientes a partir de um modelo.

function Cliente(nome,cpf,email,saldo) {
  this.nome = nome
  this.cpf = cpf
  this.email = email
  this.saldo = saldo 
  this.depositar = function(valor){
    this.saldo = this.saldo + valor
  }
}

//new = palavra reservada
//serve para instanciar objetos a partir de classes  ??
const juninho = new Cliente ("Junior",87447630004,"juninho@email",1500)

//DEFINIÇÃO DE HERANÇA
//Se entrar no console do navegador e digitar
//juninho.__proto__
//vai mostrar que o contrutor desse objeto é o Cliente(nome,cpf...)
//juninho.__proto__.__proto__
//vai mostrar que o construtor do cliente é um objeto, nos mostrando um nivel a mais na herança.. chamado de cadeia de protótipo

//exportando o objeto
module.exports = Cliente;
