//Variáveis

//var
// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area)

// var area;

//O var é uma atribuição de escopo global pode ser utilizada antes de ser declara (linha 8 e linha 11) porque assim que o JS é executado, ele lê todo o código, acha todas as variáveis, vai achar todas variáveis do tipo var, e vai carregalas primeiro, então ele aprende tudo que é variável primeiro, e depois roda o algoritmo.

//var pode ser atualizada no decorrer do código e declaradas novamente
// var aceno = 'oi'
// var aceno = 'tchau'
// if (3 > 2) {var aceno = 'obrigado'}, a var aceno foi atualizada, porém se tivermos ela em outra parte do nosso código, também será atualizada, e isso pode ser um problema 

//let
let forma = 'retângulo'
let altura = 5;
let comprimento = 7;
let area;

if (forma === 'retângulo') {
  area = altura * comprimento;

} else {
  area = (altura * comprimento) / 2
}

console.log(area)

//O let é uma atribuição de escopo de bloco precisa ser declarado antes de ser utilizado, ao contrário do exemplo de cima, sobre var.
//let pode ser atualizado, porém não declarado novamente
// let aceno = 'oi' e let aceno ='tchau' (REFERENCE ERROR, let já utilizada)
//if (3 > 2) {let aceno = 'obrigado'} isso funciona, atualização da let sob uma condição 

//escopos diferentes, instâncias diferentes então só podem ser variáveis diferentes..
// let greeting = "say Hi";
// if (true) {
//     let greeting = "say Hello instead";
//     console.log(greeting); // retornará "say Hello instead"
// }
// console.log(greeting); // retornará "say Hi"

//const
//são atribuições de escopo de bloco e não podem ser atualizadas ou declaradas novamente
//const precisa ser inicializada durante sua declaração, não pode ser apenas declarada, pois como não pode ser atualizada, no decorrer do código não será atribuido nenhm possível valor a ela.




