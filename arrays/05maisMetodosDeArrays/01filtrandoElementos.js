const nomes = ['Ana','Marcos','Maria','Mauri']
const notas = [7, 4.5, 8, 7.5]

//método filter() é callback, precisa de uma função como argumento

//em filter pode ser usado dois argumentos, o _ significa que nao usamos o primeiro
//iterando no array nomes ele procura elementos que supram e coincidem (indices entre nomes e notas) a condição dada por notas[indice]
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)
console.log(`Reprovado(s):   ${reprovados}`)