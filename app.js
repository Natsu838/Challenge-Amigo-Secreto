let inserirAmigos = [];

function adicionarAmigo() {
    let amigo = document.getElementById('amigo').value;
    console.log(amigo);

    if (amigo == '') {
        alert('Por favor, insira um nome.');
    } else {
        inserirAmigos.push(amigo);
        mostrarAmigos();
        limparCampo();
    }
}

function mostrarAmigos() {
    let campo = document.getElementById('listaAmigos');
    campo.innerHTML = '';

    let i = 0;
    while (i < inserirAmigos.length) {
        let nome = inserirAmigos[i];
        let itemLista = '<li>' + nome + '</li>';
        campo.innerHTML += itemLista;
        i++;
    }
}

function sortearAmigo() {
    if (inserirAmigos.length == 0) {
        alert('Por favor, insira um nome válido.');
        return;
    } else {
        let indice = Math.floor(Math.random() * inserirAmigos.length);
        let nomeSorteado = inserirAmigos[indice]
        document.getElementById('resultado').innerHTML = `O amigo secreto sorteado é: ${nomeSorteado}`;
    }
}

function limparCampo() {
    let amigo = document.getElementById('amigo');
    amigo.value = '';
}