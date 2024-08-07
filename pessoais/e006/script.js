function atualizaData() {
    let dataAt = new Date();
    let dataAn = new Date(2024, 10, 25);

    let difer = dataAn - dataAt;

    if (difer != 0) {
        let sec = 1000;
        let min = sec * 60;
        let hor = min * 60;
        let dia = hor * 24;
    
        let diferDias = Math.floor(difer / dia);
        let diferHoras = Math.floor(difer / hor);
        let diferMinutos = Math.floor(difer / min);
    
        let dias = document.getElementById('dias-texto');
        let horas = document.getElementById('horas-texto');
        let minutos = document.getElementById('minutos-texto');
    
        dias.textContent = diferDias;
        horas.textContent = diferHoras;
        minutos.textContent = diferMinutos;
    } else {
        document.getElementById('descricao').innerHTML = 'É HOJE! &#x1F389 &#x1F973<br>Feliz aniversário de casamento!';
        document.getElementById('relogio').style.display = 'none';
        document.getElementById('descricao2').style.display = 'none';
        document.getElementById('container').style.height = '94vh';
    }
}

window.setInterval(atualizaData, 1000);
atualizaData();