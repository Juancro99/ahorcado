// Función que escoge una palabra aleatoria de un arreglo de palabras disponibles
function escogerPalabra(palabrasDisponibles) {
    // Obtiene un índice aleatorio a partir del arreglo de palabras disponibles
    let indiceAleatorio = Math.floor(Math.random() * palabrasDisponibles.length);
    // Asigna la palabra seleccionada al valor de la variable "palabrasecreta"
    let palabrasecreta = palabrasDisponibles[indiceAleatorio];
    return(palabrasecreta)
}

// Función que dibuja guiones en el canvas para cada letra de la palabra secreta
function dibujarGuiones(palabrasecreta){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("palabra");
    let pincel = pantalla.getContext("2d");

    // Establece el color y el tamaño del trazo
    pincel.lineWidth = 2;
    pincel.strokeStyle = "darkblue";

    // Divide la palabra secreta en un arreglo de letras
    var letras = palabrasecreta.split("");

    // Dibuja un guion y un espacio en blanco por letra
    for(let i = 1; i <= 2*letras.length; i=i+2){
        let t = 20 *i;
        // Dibuja el guión oscuro
        pincel.strokeStyle = "darkblue";
        pincel.beginPath();
        pincel.moveTo(t, 30);
        pincel.lineTo(t+30, 30);
        pincel.stroke(); 
    }
}

// Función que escribe las letras de la palabra secreta sobre los guiones 
function escribirLetra(letras, indice){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("palabra");
    let pincel = pantalla.getContext("2d");

    // Establece el tamaño, color y fuente de las letras
    pincel.font = "20px Arial";
    pincel.fillStyle = "darkblue";
    
    
    // Escribe la letra sobre el guion
    let t = 20 * (2*indice - 1);
    pincel.fillText(letras[indice-1], t+10, 25);
}


// Esta funcion dibuja una parte del pivot por cada error
function ahorcar(){
    //COMPLETAR
    
    // Segun el numero de errores dibuja una parte del cuerpo
    if(errores==0){                         // Dibuja la cabeza
        document.getElementById("ahorcado").src = './imagenes/a0.jpg';
        errores ++;
    }else if (errores==1){                  // Dibuja el brazo izquierdo
        document.getElementById("ahorcado").src = './imagenes/a1.jpg';
        errores ++;
    }else if (errores==2){                  // Dibuja el brazo derecho
        document.getElementById("ahorcado").src = './imagenes/a2.jpg';
        errores ++;
    }else if (errores==3){                  // Dibuaja el torzo
        document.getElementById("ahorcado").src = './imagenes/a3.jpg';
        errores ++;
    }else if (errores==4){                  // Dibuja la pierna derecha
        document.getElementById("ahorcado").src = './imagenes/a4.jpg';
        errores ++;
    }else if (errores==5){                  // Dibuja la pierna izquierda
        document.getElementById("ahorcado").src = './imagenes/a5.jpg';
        errores ++;
    }else if (errores==6){                  // Fin del juego
        let state = false;
        endgame(state);
    }

}

// Funcion que borra el ahorcado y la palabra
function borrar(){
    // Reiniciamos la horca
    document.getElementById("ahorcado").src = './imagenes/a00.jpg';
    // Definimos la pantalla y pincel
    pantalla = document.getElementById("palabra");
    pincel = pantalla.getContext("2d");

    // Borramos todo el contenido del canvas
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}
// Partiendo de la premisa que las letras se van eliminando si la letra es correcta
// esta funcion comprueba si el arreglo solo contiene espacios vacios
// si solo tiene espacios vacios quiere decir que todas las letras se han adivinado
// y llama a la funcon endgame()
function ganar(letras) {
    let todosVacios = true;
    for (let i = 0; i < letras.length; i++) {
        if (letras[i] !== "") {
            todosVacios = false;
            break;
        }
    }
    if (todosVacios) {
        let state= true;
        endgame(state);
    }
}

// Funcion pricipal que comprueba cada tecla presionada
function comprobar(event, check){
    // Comprueba si ganamos
    ganar(letras);
    // Comprobamos que la tecla sea una letra
    if (/^[A-Z]$/g.test(event.key)) {
        // Comprobamos si la tecla presionada coincide con una letra de la palabra secreta
        if (letras.includes(event.key)) {
            // Cambiamos el valor a true ya que la letra es correcta
            check = true;
            // Obtenemos el indice del arreglo
            let indice = letras.indexOf(event.key) + 1;
            // Le enviamos a la funcion el arreglo y el indice
            escribirLetra(letras, indice);
            // eliminamos la letra escrita del arreglo para comprobar si hay letras repetidas
            letras[indice-1] = "";          
            // volvemos a comprobar el arreglo para encontrar letrar repetidas
            comprobar(event);
        } else if(check == false){
            // Si la letra no es correcta dibuaja una parte del cuerpo
            ahorcar();
        }
    }
}
// Muestra la pantalla de endgame y comprueba si se gano o perdio
function endgame(state){
    if(state == true){
        jugando = false;
        let wonMsj = "¡Felicidades, has ganado!\nLa palabra secreta era "+palabrasecreta+".";
        document.getElementById("endtext").value = wonMsj;
        document.getElementById("endscreen").style.display = "block";
    }else{
        jugando = false;
        document.getElementById("endtext").value = "You lose.. :(";
        document.getElementById("endscreen").style.display = "block";
    }

}

function newgame(){
    document.getElementById("nuevojuego").textContent = "Nuevo Juego";
    // Iniciamos el juego
    jugando = true;
    errores = 0;
    // llamamos a la funcion borrar
    borrar();
    // Definimos un arreglo con las palabras disponibles 
    var palabrasDisponibles = ['GATO', 'PERRO', 'ELEFANTE', 'JIRAFA', 'LEON'];
    // Definimos la variable que va a contener la palabra secreta
    palabrasecreta = escogerPalabra(palabrasDisponibles);
    // Dibujamos los guiones
    dibujarGuiones(palabrasecreta);
    // Divide la palabra secreta en un arreglo de letras
    letras = palabrasecreta.split("");
    return (palabrasecreta)
}
// Funcion que oculta la pantalla de endgame y reinicia el juego
function restartgame(){
    document.getElementById("endscreen").style.display = "none";
    newgame();
}
var palabrasecreta = ""
var jugando = false;
var errores = 0;
var letras = "";

// Obtenemos las teclas pulsadas del teclado
document.addEventListener("keydown", function(event) {
    // Comprobamos si se esta jugando
    if(jugando==true){
        // Definimos una variable que recuerde si la letra es correcta o incorrcta
        // hasta que se presione la proxima tecla
        var check = false;
        comprobar(event, check);
    }
});