function User(nome,email){
  this.nome = nome
  this.email = email

  this.exibirInfo = function(){
    return `${nome}, ${email}`
  }
}

// //obviamente, user é o protótipo do objeto instanciado novoUser
// const novoUser = new User('Juninho','email@email.com')
// console.log(novoUser.exibirInfo())

// function Admin(role){
//   User.call(this,'Juninho','email@email.com')
//   this.role = role || 'estudante' //caso nao receba o argumento preencher com estudante(nao tinhai ideia que isso era possivel)
// }
//User.call(significa que quer aproveitar o contexto de user, as propriedades e os métodos, argumento nome, argumento email/igual está declarado no user)

//object.create, criadno um objeto, e como parâmetro a propriedade prototipo de user, os prototipos de User são passados como base para Admin.
// Admin.prototype = Object.create(User.prototype)
// const novoUser = new Admin('admin')
// console.log(novoUser.exibirInfo())
// console.log(novoUser.role)
//sinceramente, acho que muito avançado pra mim....!:(

const user = {
  //isso substitui o construtor das classes OO
  //para podermos instanciar um novo objeto com suas propriedades 
  init: function(nome,email){
    this.nome = nome 
    this.email = email
  },

  exibirInfo: function(){
    return this.nome
  }
}
//Para criar um novo objeto a partir deste objeto literal...
//const novoUser = Object.create(user)
// console.log(novoUser.exibirInfo('Juninho'))
// //user é prototipo de novoUser
// console.log(user.isPrototypeOf(novoUser)) //true

const novoUser = Object.create(user)
novoUser.init('Juninho','j@j.com')
console.log(novoUser.exibirInfo())