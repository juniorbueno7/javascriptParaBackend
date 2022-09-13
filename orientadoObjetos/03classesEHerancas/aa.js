class User {
  role = '';
 
  constructor(nome) {
    this.nome = nome;
    console.log(`Criado novo usuário: ${nome}` );
  }
 }
 
 // criar o usuário
 let novoUser = new User('Rodrigo');
 
 // modificar o role
 novoUser.role = 'admin';
 console.log(novoUser.role) // admin  