export default class User {
  #nome 
  #sobrenome
  #email
  #nasc
  #role
  #ativo
  constructor(nome, sobrenome, email, nasc, role, ativo = true){ //ativo ja declarado
    this.#nome = nome // pp = propriedade privada
    this.#sobrenome = sobrenome
    this.#email = email
    this.#nasc = nasc
    this.#role = role || 'estudante' //se nao receber o argumento, por padrao, será estudante
    this.#ativo = ativo
  }

  //nunca recebem argumento, apenas retornam, get....
  get nome(){
    //pode ter lógica condicional
    return this.#nome
    //`${this.#nome} ${this.#sobrenome}`
  }

  get sobrenome() {
    return this.#sobrenome
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
    if(novoNome === ''){
      throw new Error ('formato inválido') 
    }
    let [nome,...sobrenome] = novoNome.split("")
    sobrenome = sobrenome.join('')
    this.#nome = nome
    this.#sobrenome = sobrenome
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

const novoUser = new User('Juliana', 'Souza', 'j@j.com', '2021-01-01')
console.log(novoUser.nome) //'Juliana'
novoUser.nome = 'Juliana Silva Souza'
console.log(novoUser.nome) //'Juliana'
console.log(novoUser.sobrenome) //'Silva Souza'