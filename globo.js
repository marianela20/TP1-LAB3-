
function seguir(evento){
    evento.preventDefault();
    let seguir = document.getElementById('btnSeguir');
    let texto = seguir.textContent;
    if(texto == 'Seguir'){
        seguir.textContent = 'Dejar de seguir';
    }
    else{
        seguir.textContent = 'Seguir';
    }
    
}
document.getElementById('btnSeguir').addEventListener('click', seguir);


function darMeGusta(evento){
    evento.preventDefault();
    let num = 200;
    let likes = document.getElementById('likes');
    likes.textContent = num += 1;

}
document.getElementById('meGusta').addEventListener('click', darMeGusta);


function agregarComentario(evento){
    evento.preventDefault();
    let usuarioIngresado = document.getElementById('name').value;
    let textoComentario = document.getElementById('comentario').value;
    if(usuarioIngresado.trim() === ''){
        alert('Ingrese su usuario');
        return
    }
    else if(textoComentario.trim() === ''){
        alert('Ingrese un comentario');
        return
    }

    let texto = document.createTextNode(usuarioIngresado + ': ' + textoComentario);
    let parrafoo = document.createElement('p')
    parrafoo.appendChild(texto);
    document.getElementById('listadoComentarios').appendChild(parrafoo);
    
    document.getElementById('name').value = '';
    document.getElementById('comentario').value = '';
}
document.getElementById('textoComentario').addEventListener('click',agregarComentario);

