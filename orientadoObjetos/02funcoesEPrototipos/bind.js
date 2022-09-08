const User = {
  nome: 'Sabao',
  email: 'j@email.com',
  nasc: '13/10/2000',
  role: 'admin',
  ativo: true,
  exibirInfos: function(){
    console.log(this.nome,this.email)
  }
}

//User.exibirInfos() // executa a função no contexto do objeto user

const exibir = function(){ // nao retorna nada, nao tem o contexto do objeto para trabalhar com o this.nome
  console.log(this.nome)
}

//BIND
//pegou uma função existente e atrelou ao contexto do objeto que foi passado como parâmetro.
const exibirNome = exibir.bind(User)
exibirNome()