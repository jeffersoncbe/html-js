const idade = 69


console.log(`Idade: ${idade} anos`)

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

