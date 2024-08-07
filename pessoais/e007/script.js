let form = document.getElementById('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let peso = document.getElementById('txtpeso').value;
    let altura = document.getElementById('txtaltura').value;

    let imc = (peso / (altura * altura)).toFixed(2);

    let valor = document.getElementById('valor');
    let descricao = '';

    valor.classList.add('atencao');

    document.getElementById('infos').classList.remove('hidden');

    if (imc < 18.5) {
        descricao = 'Você está abaixo do peso!';
    } else if (imc >= 18.5 && imc <= 25) {
        valor.classList.remove('atencao');
        valor.classList.add('normal');
        descricao = 'Você está no peso ideal!';
    } else if (imc > 25 && imc <= 30) {
        descricao = 'Você está com sobrepeso!';
    } else if (imc > 30 && imc <= 35) {
        descricao = 'Você está com obesidade moderada!';
    } else if (imc > 35 && imc <= 40) {
        descricao = 'Você está com obesidade severa!';
    } else {
        descricao = 'Você está com obesidade mórbida!';
    }

    valor.textContent = imc.replace('.',',');
    document.getElementById('descricao').textContent = descricao;
})