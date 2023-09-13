const informaIdade = () => {
    let idadeValor = document.getElementById('idade').value;
    if(idadeValor >= 3 && idadeValor <= 10) {
       document.write("3 a 10 anos");
    } else if (idadeValor >= 11 && idadeValor <= 25) {
        document.write("11 a 25 anos");
    } else if (idadeValor >= 36 && idadeValor <= 55) {
        document.write("36 a 55 anos");
    } else if (idadeValor >= 56 && idadeValor <= 100) {
        document.write("56 a 100 anos");
    }
}