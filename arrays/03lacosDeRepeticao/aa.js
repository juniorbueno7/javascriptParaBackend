const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]


let media = 0

//notasGerais.lenght = 3 (notas1,2,3)
//notasGerais[i] = array escolhido
//notasGerais[i][j] = array escolhido e acesso aos seus elementos

for (let i = 0; i < notasGerais.length; i++) {  //suponde que parou no notasGerais.lenght = 0 (notas1), primeiro elemento a ser acessado
  for (let j = 0; j < notasGerais[i].length; j++) {//ja dentro do notas1, ele varre o array novamente
    media = media + notasGerais[i][j]/notasGerais[i].length; //
  }
}

console.log(media)
