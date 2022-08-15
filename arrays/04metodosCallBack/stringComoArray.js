//“String”, além de ser o tipo de dado usado para representar textos, também se define como uma sequência ordenada de caracteres, ingual aos arrays.

const nome = "Juninho"
let novoNome = ""

for(i = 0; i < nome.length; i++){
  novoNome = novoNome + nome[i].toUpperCase()
}

console.log(novoNome)

