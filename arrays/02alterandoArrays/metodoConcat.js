//Mais estudos sobre o metodo concat(), usado para concatenar arrays 
arrayOriginal = ['Juninho','Te amo','Trem bala']

//Podemos apenas agregar dados ao vetor, não precisamos passar necessariamente um vetor como argumento para concatenar
//Utilizando 1 vetor com 2 indices 
arrayConcatComUmVetor = arrayOriginal.concat('Ai calica','Quer dar pros amiguin da boca?')
console.log(arrayConcatComUmVetor)

//O método concat() não necessariamente precisa de um vetor como argumento para concatenar..
//Utilizando 3 vetores para concatenação com 2 indices
arrayConcatMaisDeUmVetor = arrayOriginal.concat(['Ama porra nenhuma','123'], ['So quer extorquir meu dinheiro','456'], [8])
console.log(arrayOriginal)
console.log(arrayConcatMaisDeUmVetor)

//Concatenando com um array com dois elementos, um primitivo e um array 
arrayConcatVetorDeVetor = arrayOriginal.concat([8,[10,20]])
console.log(arrayConcatVetorDeVetor)

//O concat naturalmente "ignora" os parentêses e concatena apenas o elementos
//Porém ele não faz isso de forma recursiva, não extrai elementos de arrays "aninhados", [10,20] entrou como um elemento do novo array
console.log(arrayConcatVetorDeVetor[4])

