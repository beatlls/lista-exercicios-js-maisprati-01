// Algoritmo que lê o número de maçãs compradas e calcula o valor total da sua compra, sendo menos de uma dúzia o valor de 0,30 centavos cada e acima disso, 0,25 centavos cada.

const prompt = require('prompt-sync')()

let maca = Number(prompt("Digite a quantidade de maçãs que deseja comprar: "))
let multiplicacao = 0

if(maca < 12) {
    const multiplicacao = maca * 0.3 
    console.log(`você irá pagar ${multiplicacao} em ${maca} maçãs.`)
} else if(maca >= 12) {
    const multiplicacao = maca * 0.25
    console.log(`você irá pagar ${multiplicacao} em ${maca} maçãs.`)
} else {
    console.log("quantidade não identificada.")
}