const concatena = () => {
    let nome = document.getElementById('nome').value;
    let estado = document.getElementById('estadoCivil').value;
    let select = document.getElementById('faixaEtaria').value;
    let unirTexto = document.getElementById('texto');
    unirTexto.innerHTML = `${nome} - ${estado} - ${select}`;
}