// ARROW FUNCTION 

//declaração de função 
function apresentar(nome){
  return `Meu nome é ${nome}`;
}

//arrow function 
    //"nome" variavel   //parametro  //return
const apresentaArrow = nome => `meu nome é ${nome}`;

//arrow function com dois parâmetros (por isso os () no parâmetro)
const soma = (n1, n2) => n1 + n2;

//basicamente é uma simplificação maior ainda do que a função expressa, não tem nome, nao tem return, nao tem chaves, pra enxugar tudo que pode da declaração de função
// TRÊS POSSÍVEIS NÍVEIS DE UMA FUNÇÃO:
// declarada --- expressa --- arrow

//arrow function com mais de uma linha de instrução
const somaNumeros = (n3,n4) => {
  if (n3 > 10 || n4 >10){
    return `somente números de 1 a 9`
  } else {
    return n3 + n4
  }
}
//aqui são necessários os parenteses, chaves e return pq a arrow function tem mais de uma linha de instrução.
