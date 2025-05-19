// Algoritmo que pede dois valores ao usuário e os lê, colocando em ordem crescente.

const prompt = require('prompt-sync')()

let numero1 = Number(prompt("Escolha um número: "))
let numero2 = Number(prompt("Escolha um segundo número: "))

if(numero1 < numero2) {
    console.log(numero1, numero2)
} else {
    console.log(numero2, numero1 )
}