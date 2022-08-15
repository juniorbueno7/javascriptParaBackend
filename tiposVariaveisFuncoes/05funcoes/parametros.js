// Parâmetros de função

function soma(num1, num2) {
  return num1 + num2;
}
                        // Ordem dos parâmetros
console.log(soma(10, 10)) // num1 = 10 ; num2 = 10
console.log(soma(-87, 4)) // num1 = -87 ; num2 = 4
console.log(soma(2, 7))  // nume1 = 2 ; num2 = 7

// Parâmetros === argumentos -> true 
// atualizado em 28/06
// em algumas documentações dizem que parâmetros são o que definimos na declaração da função e argumentos são os dados que utilizamos para executar a função. 

// Sobre ordem dos parâmetros/argumentos
function nomeIdade(nome, idade) {
  return `Meu nome é ${nome} e a minha idade é ${idade}`;  
}

console.log(nomeIdade(21, "Junior"))

function multiplica(n1, n2) {
      return n1 * n2;
}


console.log(multiplica(soma(4, 5), soma(3, 3)))


// desse jeito a função sempre funciona, mesmo exigindo dois padrões e a gente passando apenas um.., o padrão que foi passado (linha 33) substitui o valor que já está ao parâmetro
function multiplicaValorPadrao(numero1 = 1, numero2 = 1) {
  return numero1 * numero2 
}

console.log(multiplicaValorPadrao(soma(5,5)))

// OS PARÃMETROS NÃO SÃO VARIÁVEIS, ELES FUNCIONAM APENAS NO ESCOPO DA FUNÇÃO,PODEMOS TER 10 FUNÇÕES COM OS MESMO PARÂMETROS, SÓ SERÁ EXECUTADO NA CHAMADA DA FUNÇÃO ESPECIFICA.

//boa prática = poucos argumentos/parâmetros na função, muitos parâmetros numa mesma função significa que ela pode ser quebrada em mais funções, facilitando a leitura e a manutenção. 

