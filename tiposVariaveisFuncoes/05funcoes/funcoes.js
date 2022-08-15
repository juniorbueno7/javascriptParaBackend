// let x = ''
// console.log(x)
// x = "oi"

// 1) Declarando a função 

function impremeTexto(texto) {
    console.log(texto)
}

// 2) chamada da função 

impremeTexto("oi");
impremeTexto("Outro texto");


// Três formas de escrever funções 

function soma(){ // sem parâmetro
  const resultado = 2 + 2;
} // a função executa a operação, porém não sabe oq mostrar, porque nada é retornado para ela

function soma(){ // sem parâmetro
  return 2 + 2; // jeito certo de ser escrito // o return precisa ser a última linha da função, coisas escritas depois não serão retornadas se assim desejado.
}

console.log(soma());

// aqui, o impreme texto, que é a função console.log basicamente, é utilizada para exibir o return da função soma(), que é 4...
impremeTexto(soma());