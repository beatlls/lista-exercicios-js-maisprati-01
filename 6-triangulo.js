// Identificando se é um triângulo e os seus tipos: Isósceles, escaleno ou eqüilátero.

const prompt = require('prompt-sync')()

let lado1 = Number(prompt("Digite o tamanho do primeiro lado: "))
let lado2 = Number(prompt("Digite o tamanho do segundo lado: "))
let lado3 = Number(prompt("Digite o tamanho do terceiro lado: "))

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
  // Verifica o tipo de triângulo
  if (lado1 === lado2 && lado2 === lado3) {
    console.log("É um triângulo equilátero");
  } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
    console.log("É um triângulo isósceles");
  } else {
    console.log("É um triângulo escaleno");
  }
} else {
  console.log("Os lados não formam um triângulo");
}