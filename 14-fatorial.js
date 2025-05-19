//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.

const prompt = require('prompt-sync')()

function fatorial(numero){
    let num = 1
    for(let i = numero; i > 1; i--) {
    num *= i
    }
    return num
}

let entrada = Number(prompt("Digite um número inteiro para calcular seu fatorial: "))
let numero = parseInt(entrada)

console.log(`O fatorial de ${entrada} é ${fatorial(numero)}`)