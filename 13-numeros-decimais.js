// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.

const prompt = require('prompt-sync')
()

let soma = 0
let contador = 0

while(true){
    let numero = Number(prompt("Digite um número decimal, ou 0 para parar: "))

    if(numero === 0){
        break
    }

    soma += numero
    contador++

    if(contador > 0) {
        let media = soma / contador
        console.log("A média é: " + media)
    } else {
        console.log("Nenhum número digitado.")
    }
}