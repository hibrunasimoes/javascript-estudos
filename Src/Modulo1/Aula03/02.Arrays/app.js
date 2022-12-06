// Arrays - para armenzar lista de valores que geralmente tem relacao entre si 
let heroes = ['Batman', 'Catwoman', 'Iron Man']
const ages = [31, 25, 39, 40, 25]
const randomArray = ['Parker', 'Diana', 19,20]

// para sobescrever um valor do array
heroes[2]= 'Spider-Man'
// console.log(heroes)
console.log(randomArray)

// console.log(heroes[0])
// console.log(heroes[1])
// console.log(heroes[2])

// Métodos de arrays
//join, retoranr uma nova string com todos os itens do array concatenados e separados entre virgulas, -, ou o que escolher
const joinHeroes = heroes.join('-')
//retonar a primeira ocorrencia do 25 no array
const indexOf25 = ages.indexOf(25)
//vai concatenar o heroes com os outros heroes passandos no parametro
const moreHeroes = heroes.concat(['Superman', 'Wolverine'])
// adiciona no final do array e retonar o novo numero de itens no array
// push é um metodo que altera o valor original
const pushToHeroes = heroes.push('Cyclops', 'Hulk')
// remove o ultimo item do array e exibe ele
const popHeroes = heroes.pop()

// console.log(heroes)