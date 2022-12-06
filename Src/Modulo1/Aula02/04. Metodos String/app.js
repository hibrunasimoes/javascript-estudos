// métodos comuns de string
const email = 'laracroft@rogermelo.com.br'

// metodo lastIndexOf, saber em qual lugar foi a ultima ocorrencia do "a"
// const lastIndexOfA = email.lastIndexOf('a')

// slice, o primeiro argumento é o que representa de onde a string deve iniciar, e o segundo argumento é o que representa onde a string deve terminar
// const emailSlice = email.slice(4, 9)

//replace, substitui um argumento pelo outro, o primeiro argumento que passamos, é que nós queremos substituir, e o segundo argumento é pelo qual nós vamos substituir.
const emailReplace = email.replace('laracroft', 'chun-li')

// replace nao modifica a string original
console.log(emailReplace, email)