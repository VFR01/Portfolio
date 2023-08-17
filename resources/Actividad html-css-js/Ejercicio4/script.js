const boton = document.getElementById('btn');
const menu = document.getElementById('menu');

boton.addEventListener('click', function(){
    if (menu.classList.contains('option'))
        {menu.classList.remove('option');
    } else {menu.classList.add('option')}    
    
})