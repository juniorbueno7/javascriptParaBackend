export default class User { //npm init -y, depois de description "type": "module" 
  #nome //para fazer propriedades privadas
  #email
  #nasc
  #role
  #ativo
  constructor(nome, email, nasc, role, ativo = true){ //ativo ja declarado
    this.#nome = nome // pp = propriedade privada
    this.#email = email
    this.#nasc = nasc
    this.#role = role || 'estudante' //se nao receber o argumento, por padrao, será estudante
    this.#ativo = ativo
  }

  //nunca recebem argumento, apenas retornam, get....
  get nome(){
    //pode ter lógica condicional
    return this.#nome
  }

  get email(){
    return this.#email
  }

  get nasc(){
    return this.#nasc
  }

  get role(){
    return this.#role
  }
  
  get ativo(){
    return this.#ativo
  }

  set nome(novoNome){
    this.#nome = novoNome
  }

  //agora o o contexto são os getters, afinal o constructor tem a #, são todos privados 
  exibirInfo(){
    return`${this.nome}, ${this.email}, ${this.nasc}, ${this.role}, ${this.ativo}`
  }
  //utilizando para executar lógicas internas da classe, sem acesso externo
  // #montaObjUser(){
  //   return({ //para retornar um objeto é assim que se faz 
  //     nome: this.#nome,
  //     email: this.#email,
  //     nasc: this.nasc,
  //     role: this.#role,
  //     ativo: this.#ativo
  //   }) //ao chamar esse método o console retorna 
  //      //Private field '#montaObjUser' must be declared in an enclosing class
  // }

  // exibirInfo(){
  //   const objUser = this.#montaObjUser()
  //   return`${objUser.nome}, ${objUser.email}, ${objUser.nasc}, ${objUser.role}, ${objUser.ativo}`
  // }
  //atribuimos o método a uma variavel, como se fosse um insatnciamento, e então acessamos suas propriedades nao precisa #, pq ja fizemos essas atribuições no #montaObjUser.
}

// console.log(User.prototype.isPrototypeOf(novoUser)) // true