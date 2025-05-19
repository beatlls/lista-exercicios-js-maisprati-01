//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.

const prompt = require('prompt-sync')()

let numero = Number(prompt("Digite um número que você deseja ver a tabuada de 1 a 10: "))

for(let i = 0; i <= 10; i++) {
    console.log(numero * i)
}