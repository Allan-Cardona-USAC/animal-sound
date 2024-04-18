function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play('');
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador];
    const intrumento = tecla.classList[1];

    const idAudio = `#sonido_${intrumento}`;

    tecla.onclick = function(){
        playSonido(idAudio)
    };
    tecla.onkeydown   = function(){ 
        tecla.classList.add('activa')
    }
    /* Para quitar la clase "activa" y volver a su estado original cuando dejamos de presionar la tecla, necesitaríamos utilizar el evento onkeyup. 
    Este evento se activa cuando se suelta una tecla. 
    Podemos utilizarlo para eliminar la clase "activa" de la tecla correspondiente.*/ 
    tecla.onkeyup = function() {
        tecla.classList.remove('activa');
    }
    /*Para lograr que el color rojo se quite cuando te mueves a otra tecla utilizando la tecla "Tabulador", puedes utilizar el evento onblur. 
    Este evento se activa cuando un elemento pierde el foco, lo que significa que puedes usarlo para quitar 
    la clase "activa" cuando te mueves a otra tecla. */
    tecla.onblur = function() {
        tecla.classList.remove('activa');
      } 
}