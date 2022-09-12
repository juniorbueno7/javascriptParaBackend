const User = {
  nome: 'Sabao',
  email: 'j@email.com',
  nasc: '13/10/2000',
  role: 'estudante',
  ativo: true,
  exibirInfos: function(){
    console.log(this.nome,this.email)
  }
}

const Admin = {
  nome: 'Administrador',
  email: 'email@email.com',
  role: 'admin',
  criarCruso(){
    console.log('curso criado')
  }
}

//Leva 2 parâmetros
//1° o objeto que receberá a herança
//2° o objeto que irá herdar
Object.setPrototypeOf(Admin,User)
Admin.criarCruso()
Admin.exibirInfos()

//o JS procura em admin o método exibirInfo(), não acha, então procura se declaramos esse sequema de herdeiro e herança, acha, cai dentro do objeto user, e finalmente acha o método para poder utilizalo.