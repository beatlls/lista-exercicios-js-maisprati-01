// Cálculo do IMC e da sua categoria (baixo peso, peso normal, sobrepeso e obesidade) diante dos dados fornecidos.

const prompt = require('prompt-sync')()

let peso = Number(prompt("Digite seu peso: "))
let altura = Number(prompt("Digite sua altura em metros: "))
let imc = peso / (altura * altura)
let categoria = ""

if (imc < 18.5) {
  categoria = "Baixo peso"
} else if (imc >= 18.5 && imc < 24.9) {
  categoria = "Peso normal"
} else if (imc >= 25 && imc < 29.9) {
  categoria = "Sobrepeso"
} else {
  categoria = "Obesidade"
}

console.log(`Seu IMC é ${imc} e você está classificado em ${categoria}`)