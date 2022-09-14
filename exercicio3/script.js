// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma (num1, num2){
    console.log(num1 + num2)
}

function subtracao (num1, num2){
    console.log(num1 - num2)
}

function multiplicacao (num1, num2){
    console.log(num1 * num2)
}

function divisao (num1, num2){
    console.log(num1 / num2)
}

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

let num1 = Number(prompt("Digite o primeiro numero"))
let num2 = Number(prompt("Digite o segundo numero"))

soma(num1, num2)
subtracao(num1, num2)
multiplicacao(num1, num2)
divisao(num1, num2)
