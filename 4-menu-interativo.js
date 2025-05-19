// Menu interativo implantado no console, oferecendo três opções ao usuário.

const prompt = require('prompt-sync')()

console.log("1. Ler um livro\n2. Jogar GTA\n3. Assistir Black Mirror")

let atividades = prompt("Escolha uma opção:")

switch(atividades) {
    case "1":
        console.log("Você leu um livro novo e amou!")
        break;
    case "2": 
        console.log("Você jogou GTA V e foi dormir tarde... De novo.")
        break;
    case "3":
        console.log("Assistiu e saiu amendrontado(a), essas tecnologias...")
    default:
        console.log("Opção inválida")
}