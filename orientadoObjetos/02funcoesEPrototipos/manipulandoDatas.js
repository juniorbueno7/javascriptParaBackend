let dataEHora = Date() // utilizando a chamada de função diretamente
console.log(dataEHora)
 // Mon Jan 31 2022 23:44:05 GMT-0300 (Brasilia Standard Time)
console.log(typeof dataEHora)
 // string

 //desse jeito podemos utilizar os métodos nátivos do javascript para a manipulação de datas, porque instanciamos a classe Date a um objeto
//let dataEHora = new Date() // utilizando o construtor do objeto Date
//console.log(dataEHora)
// 2022-02-01T02:46:51.517Z
//console.log(typeof dataEHora)
// object


let dataComConstrutor = new Date()
let data1 = dataComConstrutor.getFullYear()
console.log(data1) //31
