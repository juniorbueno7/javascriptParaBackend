const colecionador = {
  nome: "João do Gibi",
  idade:41,
  tipocolecao: ["quadrinhos"],
  contato: "joao@email.com",
  adicionarTipo: function(propriedade,tipo){
    this[propriedade].push(tipo)
    //usando notação de colchetes para a função ter exito em achar qual propriedade acessar, afinal é passado como argumento na chamada como string.
  }
}

for(i = 0; i < 4; i++) {
  colecionador.adicionarTipo("tipocolecao","HQ"+i)
}

console.log(colecionador)
