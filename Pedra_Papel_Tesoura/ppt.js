// Constantes que irião armazenar os valores a serem exibidos
const escolhaMaquinaExibir = document.getElementById('escolha-maquina')
const escolhaUsuarioExibir = document.getElementById('escolha-nossa')
const resultadoExibir      = document.getElementById('resultado')
// Nossas escolhas dentro de "button" serão varridas
const escolhaPossiveis     = document.querySelectorAll('button') 

// Nossa variável no Script
let escolhaUsuario
let escolhaMaquina
let resultado

// Nossas possíveis escolhas se tornam um evento que ao receber um click, o valor de "escolhaUsuario" tem seu valor alterado.
escolhaPossiveis.forEach(escolhaPossivel => escolhaPossivel.addEventListener('click', (e) => {
    escolhaUsuario = e.target.id
    escolhaUsuarioExibir.innerHTML = escolhaUsuario
    // Chamar Função para gerar escolha da Máquina
    gerarEscolhaMaquina()
    // Chamar Função para calcular o resultado
    gerarResultado()
}))

// Função responsável por gerar a escolha da Máquina
function gerarEscolhaMaquina(){
    // Gerando essa escolha através do resultado de um número aleatorio entre os valores possiveis de escolha
    const numeroAleatorio = Math.floor(Math.random() * escolhaPossiveis.length) + 1

    if (numeroAleatorio === 1) {
        escolhaMaquina = 'pedra'
    }

    if (numeroAleatorio === 2) {
        escolhaMaquina = 'papel'
    }

    if (numeroAleatorio === 3) {
        escolhaMaquina = 'tesoura'
    }

    escolhaMaquinaExibir.innerHTML = escolhaMaquina
}

// Função para Gerar o Resultado dessa disputa
function gerarResultado() {
    if (escolhaMaquina === escolhaUsuario) {
        resultado = 'Houve um Empate'
    }
    if (escolhaMaquina === 'pedra' && escolhaUsuario === 'tesoura') {
        resultado = 'Máquina Venceu'
    }
    if (escolhaMaquina === 'pedra' && escolhaUsuario === 'papel') {
        resultado = 'Usuário Venceu'
    }
    if (escolhaMaquina === 'papel' && escolhaUsuario === 'pedra') {
        resultado = 'Máquina Venceu'
    }
    if (escolhaMaquina === 'papel' && escolhaUsuario === 'tesoura') {
        resultado = 'Usuário Venceu'
    }
    if (escolhaMaquina === 'tesoura' && escolhaUsuario === 'papel') {
        resultado = 'Máquina Venceu'
    }
    if (escolhaMaquina === 'tesoura' && escolhaUsuario === 'pedra') {
        resultado = 'Usuário Venceu'
    }

    resultadoExibir.innerHTML = resultado 
}