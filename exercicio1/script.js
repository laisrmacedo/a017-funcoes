// a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

// function digaOla(nome) {
//     return `Olá, ${nome}`
// }

// console.log(digaOla("Laís"))

// b) Declare uma função que imprima a tabuada do 6. Chame esta função.

// function tabuadaDe6 (){
//     for(let i = 1; i <= 10; i++){
//         console.log(`6 x ${i} = ${i * 6}`)
//     }
// }

// tabuadaDe6()

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__ 

// console.log("Expressão de funçoes")

// const digaOla = function(nome) {
//     return `Olá, ${nome}`
// }

// console.log(digaOla("Laís"))

// const tabuadaDe6 = function(){
//     for(let i = 1; i <= 10; i++){
//         console.log(`6 x ${i} = ${i * 6}`)
//     }
// }

// tabuadaDe6()

console.log("Utilizando arrow function")

const digaOla = (nome) => `Olá, ${nome}`
console.log(digaOla("Laís"))

const tabuadaDe6 = () => {
    for(let i = 1; i <= 10; i++){
        console.log(`6 x ${i} = ${i * 6}`)
    }
}

tabuadaDe6()