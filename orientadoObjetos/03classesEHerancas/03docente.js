import User from "./01user.js";

class Docente extends User{
  constructor(nome, email, nasc, role = 'docente', ativo = true){
    super(nome, email, nasc, role, ativo)
  }

  aprovaEstudante(id,nome){
    return `o estudante ${nome} do id ${id} foi aprovado com sucesso!`
  }
}

const professorGira = new Docente('girafales','gira@email.com','01/01/1930')
console.log(professorGira)
console.log(professorGira.exibirInfo())
console.log(professorGira.aprovaEstudante(86,'claudio'))

