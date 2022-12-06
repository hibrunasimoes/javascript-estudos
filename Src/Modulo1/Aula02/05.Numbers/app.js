// inteiros e decimais
const radius = 10
const pi = 3.14
// console.log(radius, pi)

// operadores aritméticos

const area = pi * radius ** 2

// console.log (area)

// ordem de operações
const crazyOperation = 5 * (10 - 3) ** 2
// console.log (crazyOperation)

// 1° parênteses
// 2° expoentes ou raízes
// 3° multiplicação e divisão
// 4° adicição e subtração

// operadores de incremento e decremento
let postLikes = 10
// incremento +1
// postLikes = postLikes++
// console.log(postLikes)
// decremento -1
// postLikes--
// console.log(postLikes)

// operadores addition, subtraction, multiplication e division assignment
// postLikes = postLikes + 10
// ou utilizando assigment, uma forma mais simples de escrever o codigo acima
// adicionando 10
// postLikes += 10
// diminuindo 5
// postLikes -= 5
// divisao por 2
// postLikes /= 2
// console.log(postLikes)


// NaN - not a number - tentativa de retornar algo que nao faz sentido
// console.log(7 / 'oi')

// concatenação de string com número
const likesMessage = 'O post tem ' + postLikes + ' likes.'
// o resultado de uma concatenção entre um number e string sempre será string
console.log(likesMessage)