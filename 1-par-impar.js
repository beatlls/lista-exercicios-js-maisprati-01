//Programa que recebe um número e verifica se ele é "par" ou "ímpar".

const prompt = require('prompt-sync')()

let valor = Number(prompt("Digite um número: "))
let resultado

if(valor % 2 === 0) {
    resultado = 'PAR'
} else {
    resultado = 'ÍMPAR'
}

console.log(resultado)