const calculaImc = () => {
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let imc = peso / (altura * altura);
    let texto = document.getElementById('texto');
    console.log(imc);
    if(imc >= 16.00 && imc <= 16.90) {
        texto.innerHTML = `Muito abaixo do peso : De 16,00 a 16,90 kg/m²`
    } else if(imc >= 17.00 && imc <= 18.40) {
        texto.innerHTML = `Abaixo do peso : De 17,00 a 18,40 kg/m²`
    } else if(imc >= 18.50 && imc <= 24.90) {
        texto.innerHTML = `Peso normal: De 18,50 a 24,90 kg/m²`
    } else if(imc >= 25.00 && imc <= 29.90) {
        texto.innerHTML = `Acima do peso : De 25,00 a 29,90 kg/m²`
    } else if (imc > 30.00) {
        texto.innerHTML = `Obesidade: Acima de 30,00 kg/m²`
    }
}