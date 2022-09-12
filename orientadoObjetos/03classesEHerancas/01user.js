export default class User { //npm init -y, depois de description "type": "module" 
  constructor(nome, email, nasc, role, ativo = true){ //ativo ja declarado
    this.nome = nome
    this.email = email
    this. nasc = nasc
    this.role = role || 'estudante' //se nao receber o argumento, por padrao, será estudante
    this.ativo = ativo
  }

  exibirInfo(){
    return `${this.nome}, ${this.email}`
  }
}

// const novoUser = new User('Juninho','j@j.com','13/10/2000')
// console.log(novoUser.exibirInfo())
//console.log(novoUser)

// console.log(User.prototype.isPrototypeOf(novoUser)) // true