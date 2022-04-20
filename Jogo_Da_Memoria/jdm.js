// Minha lista de cartas
const listaCartas = [
    { 
        nome: 'aurelion',
        img: 'assets/aurelion.jpg'
    },
    { 
        nome: 'aurelion',
        img: 'assets/aurelion.jpg'
    },
    { 
        nome: 'champs',
        img: 'assets/champs.jpg'
    },
    { 
        nome: 'champs',
        img: 'assets/champs.jpg'
    },
    { 
        nome: 'jhin',
        img: 'assets/jhin.jpg'
    },
    { 
        nome: 'jhin',
        img: 'assets/jhin.jpg'
    },
    { 
        nome: 'shen',
        img: 'assets/shen.jpg'
    },
    { 
        nome: 'shen',
        img: 'assets/shen.jpg'
    },
]


// Sorteando a posição das cartas
listaCartas.sort(() => 0.5 - Math.random())

// Criando uma constante que vai ser responsável por colocar nossas cartas na mesa *Ba Dum Tus*
const exibirCartas      = document.querySelector('#grid')
// Criando uma constante que vai ser responsável por exibir nosso resultado
const exibirResultado   = document.querySelector('#pontuacao')

// Criando uma variavel que vai ser responsável por verificar nossas cartas escolhidas
let cartasEscolhidas  = []
// Criando uma variavel que vai ser responsável por verificar nossas cartas escolhidas por ID
let cartasEscolhidasId  = []

// Criando uma constante que vai ser responsável por nossos acertos
const acertos  = []


// Declarando uma função para exbir nossas cartas
function criarMesa() {
    // Percorrenda nossa lista de cartas
    for (let i = 0 ; i < listaCartas.length; i++) {
        // Instanciando uma constante responsável pelas nossas cartas invertidas
        const carta = document.createElement('img')
        
        // Adicionando um atributo imagem a nossa carta
        carta.setAttribute('src', 'assets/blank.jpg')
        
        // Adicionando um atributo id a nossa carta
        carta.setAttribute('carta-id', i)

        // Adicionando um evento de click
        carta.addEventListener('click', virarCarta)
        
        // Nossa constante exibirCartas recebe os valores de "carta"
        exibirCartas.appendChild(carta)
    }
}


// Chamando nossa função
criarMesa()


// Função para verificar igualdade
function verificarIgualdade() {
    // Retornando todos os valores com a tag img
    const cartas = document.querySelectorAll('img')
    const opcaoUm = cartasEscolhidasId[0]
    const opcaoDois = cartasEscolhidasId[1]

    console.log('Chamou')

    if (opcaoDois == opcaoDois) {
        console.log('Você clicou na mesma carta !')
    }

    // Se a primeira escolha for igual a segunda
    if (cartasEscolhidas[0] == cartasEscolhidas[1]) {
        // Dando um novo atributo a cartas que foram corretamente selecionadas
        cartas[opcaoUm].setAttribute('src', 'assets/acerto.jpg')
        cartas[opcaoDois].setAttribute('src', 'assets/acerto.jpg')

        // Removendo o efeito de click delas
        cartas[opcaoUm].removeEventListener('click', virarCarta)
        cartas[opcaoDois].removeEventListener('click', virarCarta)

        // Adicionando aos acertos
        acertos.push(cartasEscolhidas)
    } else {
        cartas[opcaoUm].setAttribute('src', 'assets/blank.jpg')
        cartas[opcaoDois].setAttribute('src', 'assets/blank.jpg')
    }
    
    exibirResultado.textContent = acertos.length
    cartasEscolhidas = []
    cartasEscolhidasId = []

    if (acertos.length == listaCartas.length/2) {
        exibirResultado.textContent = 'Parabéns, você encontrou todos os resultados'
    }
    
}


// Função para virar carta
function virarCarta() {
    // Recebendo o Id da carta clicada
    const cartaId = this.getAttribute('carta-id')

    // Adicionando o valor da carta escolhida a nossas acertos
    cartasEscolhidas.push(listaCartas[cartaId].nome)
    cartasEscolhidasId.push(cartaId)

    console.log(cartasEscolhidas)
    console.log(cartasEscolhidasId)

    // Exibindo os acertos
    this.setAttribute('src', listaCartas[cartaId].img)

    // Lógica para verificar se são iguais
    if (cartasEscolhidas.length === 2) {
        setTimeout( verificarIgualdade, 500)
    }
}