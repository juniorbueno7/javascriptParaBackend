//Módulo
const prompt = require ("utils/prompt")

//Padrão, sem formatação alguma;
/*function ganhoPorHora(salario, horas) {

    const salarioHora = (salario/horas)
    return salarioHora
}*/

//Com arredondamento simples
/*function ganhoPorHora(salario, horas) {

    const salarioHora = (salario/horas)
    return Math.round(salarioHora); // Math.round (Arredondamento simples) para o valor inteiro mais próximo
}*/

//Com 2 casa decimais
/*function ganhoPorHora(salario, hora) {

    const salarioHora = (salario/hora);
    const total = salarioHora.toFixed(2); // toFixed (número de casas depois da virgula), arredonda pra cima   (11.123 = 11.12 // 20.555 = 20.56) e retorna o valor como uma string
    return total;
}*/

//Formatando o resultado para REAL R$ 
/*function ganhoPorHora(salario,hora){

    const salarioHora = (salario/hora);
    const formatado = salarioHora.toLocaleString('pt-BR',{style: 'currency', currency: 'BRL'});
    //toLocaleString(local, style, moeda) // entrega como string e já arredondado 
    return formatado;

    /*style : Que é o estilo do formato a ser utilizado, aqui é permitido usar:
            decimal para representar números simples.
            currency que diz respeito ao formato monetário e que vai indicar a moeda que vai ser utilizada.
            percent para formato percentual.
    currency: A moeda para usar na formatação monetária
}*/

//Retorna o maior número inteiro
/*function ganhoPorHora(salario, horas){

    const salarioHora = (salario/horas);
    return Math.ceil(salarioHora); // Pega o maior número inteiro, ignora decimal 
    
}*/

//Retorna o menor número inteiro
/*function ganhoPorHora(salario, horas){

    const salarioHora = (salario/horas);
    return Math.floor(salarioHora); // Pega o menor número inteiro, ignora decimal 
    
}*/

const salario = prompt ("Entre com o valor total do salário: ", "number")
const horas = prompt ("Entre com o valor total das horas trabalhadas: ", "number")



console.log(ganhoPorHora(salario, horas))


