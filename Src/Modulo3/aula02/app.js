// Argumentos, parâmetros e default parameters
//parametros
const myFunc = function (name = 'Estrôncio', lastName = 'Almeida') {
  console.log(`Oi, ${name} ${lastName}!`)
}

myFunc()
//argumentos
myFunc('Roger')