const nomes =["Ana","Ju","Leo","Paula"]

//forEach precisa de uma função como argumento.
//o forEach ja serve para iterar, mas precisamos fazer alguma coisa após iterar esse array....
//poderia ser escrito perfeitamente com arrow function dentro do argumento do forEach
nomes.forEach(ImprimeNomes)

function ImprimeNomes(nome){
    console.log(nome)
}
