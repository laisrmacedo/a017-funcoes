// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma (num1, num2){
    console.log (`${num1} + ${num2} = ${num1 + num2}`)
}

soma(10, 20)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function comparar (num1, num2){
    if(num1 >= num2){
        console.log(num1 >= num2, "o primeiro numero é maior")
    } else {
        console.log(num1 >= num2, "o segundo numero é maior")
    }
}

comparar(20,10)

// c) Uma função que receba um número e imprima se ele é par ou não

function parOuImpar (numero){
    if(numero%2 ===0){
        console.log(numero%2 ===0, "o número é par")
    } else {
        console.log(numero%2 ===0, "o número é ímpar")
    }
}

parOuImpar(15)

// d) Uma função que recebe uma mensagem (`string`) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function mensagem (texto) {
    console.log(texto.length, texto.toUpperCase())
}

mensagem("Meu nome é Laís")

