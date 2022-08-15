let nome = "esmeralda"

//acessando caractere de forma individual

//método charAt()
console.log(nome.charAt(2)) //M

//tratando a string como objeto do tipo array
//qualquer tentativa de manipulação do dado utilizando os colchetes será sem sucesso
console.log(nome[2]) //M 

//método substring()
//primeiro argumento = 1° caractere a ser incluido na substring
//segundo argumento = 1° caractere A NAO ser incluido na substirng
console.log(nome.substring(1,3)) //SM
