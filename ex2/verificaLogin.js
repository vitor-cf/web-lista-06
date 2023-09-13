const verificaLoginSenha = () => {
    let login = document.getElementById('login').value;
    let senha = document.getElementById('pass').value;
    let text = document.getElementById('texto');
    console.log(text);
    if(!login || !senha) {
        text.innerHTML = `<br/> Senha e login incorreto`;
    } else {
        text.innerHTML = "";
    }
}