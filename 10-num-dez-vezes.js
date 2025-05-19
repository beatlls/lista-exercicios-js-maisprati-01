// Algoritmo que lê um número inteiro e o escreve na tela dez vezes seguidas.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número: "))
let vezes = 1

while(vezes <= 10) {
    console.log(numero)
    vezes++
}
