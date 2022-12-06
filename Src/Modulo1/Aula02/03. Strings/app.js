// strings
console.log('hello, world')

const email = 'leon@rogermelo.com.br'

console.log(email)

// concatenar strings
const firstName = 'Nathan'
const lastName = 'Drake'
const fullName = firstName + ' ' + lastName

console.log(fullName)

// acessando caracteres especificos [0] = N, [1]= a, [2]= t....
console.log(fullName[2])

// comprimento de uma string, contagem de caracter
console.log(fullName.length)

// métodos de string, algum tipo de funcao que vai executar alguma acao em especifico
console.log(fullName.toUpperCase())

// armazendo o valor para poder user
const result = fullName.toLowerCase()
// metodos toUpperCase e toLowerCase nao modificam o valor original
console.log(result, fullName)

//@ é um argumento 
// qual é o index que esta o @
// metodos sao pedacos de codigos imbutidos do js que executa alguma acao em especifico
// invocacao do metodo => () significa que estamos chamando um metodo
const index = email.indexOf('@')

console.log(index)