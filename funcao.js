// //Sintaxe da função
// function nome(/* argumentos, parâmetros */) { //argumentos, parâmetros: são entradas de dados para a função utilizar}
//     //bloco de código, lógica
// }

// //executar, chamando pelo nome e passa os parâmetros se houver, se não fica vazio '()'
// nome()

// //1 - Somar dois números
// function somaDoisNumeros(n1, n2) {
//     // let n1 = 50;
//     // let n2 = 70;

//     let resultado = n1 + n2;
//     console.log(resultado)


//     //o código é interrompido após o return, se houver algo abaixo, não será executado
//     return resultado

//     const teste = 'Oi!!'

// }

// // console.log(somaDoisNumeros());

// //os parâmetros/argumentos
// somaDoisNumeros(20, 50)
// somaDoisNumeros(100, 400)




function verificarIdade(idade) {
if (typeof idade !== 'string') {
const mensagem = `Idade: ${idade} anos`


    console.log(mensagem)

    if (idade >= 60) {
        console.log(`Idoso`);

        // console.log(`Se a condição for atendida`)
    } else if (idade >= 12 && idade <= 18) {
        console.log(`Adolescente`)
    } else if (idade < 12) {
        console.log(`Pivete`)
    } else {
        console.log(`Adulto`)
    }
} else {
    console.log('Por favor informar a idade no formato de número')
}
}

verificarIdade(60)
verificarIdade(18)
verificarIdade('dfsfsdfdg')