// Programa que classifica a idade do usuário que fora fornecida por tal em categorias (criança, adolescente, adulto, idoso).


const prompt = require('prompt-sync')()

let idade = Number(prompt("Digite sua idade: "))
let resultado

if(idade <= 13 ) {
    resultado = 'Você é uma criança.'
} else if(idade <= 18) {
    resultado = 'Você é um adolescente.'
} else if(idade <= 60) {
    resultado = 'Você é um adulto'
} else {
    resultado = 'Você é um idoso.'
}

console.log(resultado)