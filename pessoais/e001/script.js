let tela = document.getElementById('tela');
let buttons = document.querySelectorAll('button');

let string_holder = '';

var btn_arr = Array.from(buttons);
btn_arr.forEach(button => {
    button.addEventListener('click', (b) => {
        if (b.target.innerHTML == '=') {
            // eval() verifica se o que está na string é um código e o computa
            string_holder = eval(string_holder);
            tela.value = string_holder;
        } else if (b.target.innerHTML == 'C') {
            string_holder = '';
            tela.value = string_holder;
        } else if (b.target.innerHTML == 'DEL') {
            // substring() retorna o índice da string, do primeiro valor ao último
            string_holder = string_holder.substring(0, string_holder.length-1);
            tela.value = string_holder;
        } else {
            string_holder += b.target.innerHTML;
            tela.value = string_holder;
        }
    })
});