// o proposito de todo loop é implemtnar um pedaco de um codigo repetidas vezes.
// tudo que vem dentro das chaves é chamado de bloco de codigo, o codigo dentro vai corresponder ao loop
// a primeira expresao é a inicializacao (contador), segunda expressao é a condicao (true ou false), terceira expressao é o incremento.
for (let i = 0; i < 5; i++) {
  // console.log(`Dentro do loop: ${i}`)
}
// console.log ('loop concluido')
// const names = ['Linus', 'Ada', 'Bill']
// for (let i = 0; i < names.length; i++) {
//   console.log(names[i])
// }

// for loop
const names = ['Linus', 'Ada', 'Bill']

for (let i = 0; i < names.length; i++) {
  const HTMLTemplate = `<p>${names[i]}</p>`
  console.log(HTMLTemplate)
}
