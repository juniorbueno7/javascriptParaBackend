//declaração de função. forma declarativa.
// function cumprimentar2 (pessoa){
//   console.log(`Oi, ${pessoa}`)
//  }
//  cumprimentar2('Claudinho')


//expressão de função. forma de expressão.
// const soma = function (n1, n2) {return n1 + n2}
// console.log(soma(2,2))

                          //diferença principal

                            //    HOISTING
// VAR e FUNCTION são "listadas" no topo
// antes do JS rodar o nosso código em sí, ele lê todas as linhas, e leva as funções (declaradas) e as variáveis para o topo, tecnicamente falando, assim podemos chama-las "antes" de declararmos. 
// diferente do que acontece com a expressão de função.

//funciona perfeitamente
console.log(apresentar())
function apresentar(){
  return 'olá';
}

//ReferenceError: Cannot access 'soma' before initialization
console.log(soma(2,2))
const soma = function (n1, n2) {return n1 + n2}