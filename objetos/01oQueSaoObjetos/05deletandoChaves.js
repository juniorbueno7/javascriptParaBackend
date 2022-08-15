const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago"
  },
  status: "desaparecido"
}

//deletando com o operador nativo do js delete
//notação de ponto
delete objPersonagem.nome
console.log(objPersonagem.nome)

delete objPersonagem.aliado
console.log(objPersonagem)

//notação de colchetes
delete objPersonagem["nivel"]
console.log(objPersonagem)

//são deletados as chaves/propriedades, não somente seus valores..