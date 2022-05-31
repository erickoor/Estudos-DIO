function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`
}

const pessoa1 = {
    nome: 'Flávia',
    idade: 30
}

const pessoa2 = {
    nome: 'Erick',
    idade: 26
}

const animal = {
    nome: 'Peter',
    idade: 5,
    raca: 'Vira-Lata'
}

console.log(calculaIdade.apply(animal, [7]))