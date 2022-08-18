const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
}

const objPersonagem2 = objPersonagem

objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

//objPersonagem2 nao fez uma copia do objeto principal, eles apenas servem de refêrencia uma para o outro
//alterando qualquer um dos dois, altera o único objeto do código.

//diferentemente de tipos primitivos, onde essa situação de cópia funciona.
let num = 50
let num2 = num

num2 = 100
console.log(num) //50
console.log(num2) //100

//para contornar a situação, utilizamos o método Object.create()

const objPersonagemMetodo = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20"
 }
 
 const objPersonagemMetodo2 = Object.create(objPersonagemMetodo)

 objPersonagemMetodo2.nome = "Gandalf, o Cinzento"
 
 console.log(objPersonagemMetodo.nome) //Gandalf
 console.log(objPersonagemMetodo2.nome) //Gandalf, o Cinzento
 console.log(objPersonagemMetodo2) //nao copiou o objeto todo, apenas o nome...

 //o método cria um novo objeto, utilizando como prototipo para esse novo objeto um objeto ja existente, que é passado pelo parâmetro.