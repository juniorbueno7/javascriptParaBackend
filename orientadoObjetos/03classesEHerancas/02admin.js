import User from "./01user.js"; //precisa ter o .js se nao o interpretador se perde..

//o extends serve para apontar para onde queremos herdar as propriedades 
class Admin extends User {
  constructor(nome, email, nasc, role = 'admin', ativo = true){//ja passamos role = admin porque essa é a classe dos admins...
    super(nome, email, nasc, role, ativo)//superClasse = User / subClasse = admin. aqui botamos todas as propriedades que queremos herdar, nao precisa ser necessariamente todas.
  } 

  //a classe User não tem acesso aos métodos declaros na classe admin, mas a admin tem, pq afinal é uma subclass de user, filha dela.
  criarCurso(nomeCurso, vagas){
    return `Curso ${nomeCurso} criado com ${vagas} vagas`
  }
}

const novoAdmin = new Admin('claudio','c@email.com','13/01/1999',)

console.log(novoAdmin.criarCurso('execução penal', 20))

