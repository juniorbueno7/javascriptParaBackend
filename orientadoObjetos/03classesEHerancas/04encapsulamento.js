import User from "./01user.js";
import Admin from "./02admin.js";
import Docente from "./03docente.js";

const novoUser = new User('Sabonete','s@email.com','13/10/2000')
console.log(novoUser.exibirInfo()) // sabonete, s@email.com

//aqui ja consta como erro, acusa que o #nome é um campo privado 
// novoUser.#nome = 'Junior' // Junior, troca o nome do objeto..
// console.log(novoUser.#nome)

//Todos as propriedades de User são privadas, não podem ser alteradas fora da declaração da classe 
