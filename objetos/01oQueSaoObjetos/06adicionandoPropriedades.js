const pessoa = {
  nome:"Bruce Banner",
  dataNascimento:"25/01/1980",
  carteiraIdentidade:"997776-X",
  email:"profbanner@email.com",
  telefone:"+552877776666",
  cidade:"Cachoeiro de Itapemirim",
  estado:"ES"
}

pessoa.seguroSocial = '68652665'
pessoa.cpf = '982356523560'

//mostrando apenas os primeiros digitos
pessoa.cpf.substring(0,4)
pessoa.carteiraIdentidade.substring(0,4)

//não descobri ainda como iplemntar o substring de forma "fixa" no objeto inteiro 
console.log(pessoa)
