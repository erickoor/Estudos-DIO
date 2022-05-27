function operadores(){
    let n1 = Number(prompt('Insira o primeiro valor: '))
    let n2 = Number(prompt('Insira o segundo valor: '))
    let soma = n1 + n2
    var iguais = ''
    var dez = ''
    var vinte = ''

    if (!n1 || !n2){
        alert('Valor inválido')
        operadores()
    } else {
        if (n1 == n2){
            var iguais = 'são'
        } else {
            var iguais = 'não'
        }
        
        if (soma == 10){
            dez = 'igual'
        } else if (soma > 10){
            dez = 'maior'
        } else {
            dez = 'menor'
        }
    
        if (soma == 20){
            vinte = 'igual'
        } else if (soma > 20){
            vinte = 'maior'
        } else {
            vinte = 'menor'
        }
    
        alert('Os números '+n1+' e '+n2+' '+iguais+' iguais. Sua soma é '+soma+', que é '+dez+' que 10 e '+vinte+' que 20')
        novaOperacao()
    }

    function novaOperacao() {
        let opcao = prompt('Deseja fazer outra operação?\n 1 - Sim\n 2 - Não')
        if (opcao == 1) {
            operadores()
        } else if (opcao == 2) {
            alert('Até mais!')
        } else {
            alert('Digite uma opção inválida')
            novaOperacao()
        }
    }

    
}

operadores()