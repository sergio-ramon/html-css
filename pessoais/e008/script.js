let b = document.getElementById('menu');
b.addEventListener('click', m => {
    if (document.getElementById('menu-lateral')) {
        document.getElementById('menu-lateral').id = 'hidden';
    } else {
        document.getElementById('hidden').id = 'menu-lateral';
    }
})