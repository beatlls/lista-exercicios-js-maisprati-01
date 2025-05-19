// Programa que implementa notas de 0 a 10 e classifica o aluno em "Aprovado" ou "Reprovado".

const prompt = require('prompt-sync')()

let nota = Number(prompt("Digite uma nota: "))
let resultado

if(nota <= 5 ) {
    resultado = 'Aluno está REPROVADO.'
} else if(nota <= 6) {
    resultado = 'Aluno está de RECUPERAÇÃO.'
} else {
    resultado = 'Aluno está APROVADO.'
}

console.log(resultado) 