// Función que escoge una palabra aleatoria de un arreglo de palabras disponibles
function escogerPalabra(palabrasDisponibles) {
    // Obtiene un índice aleatorio a partir del arreglo de palabras disponibles
    let indiceAleatorio = Math.floor(Math.random() * palabrasDisponibles.length);
    // Asigna la palabra seleccionada al valor de la variable "palabrasecreta"
    palabrasecreta = palabrasDisponibles[indiceAleatorio];
    return(palabrasecreta)
}

// Función que dibuja guiones en el canvas para cada letra de la palabra secreta
function dibujarGuiones(palabrasecreta){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("palabra");
    let pincel = pantalla.getContext("2d");

    // Establece el color y el tamaño del trazo
    pincel.lineWidth = 5;
    pincel.strokeStyle = "darkblue";

    // Divide la palabra secreta en un arreglo de letras
    var letras = palabrasecreta.split("");

    // Dibuja dos guiones por letra en el canvas
    for(let i = 1; i <= 2*letras.length; i=i+2){
        let t = 30 *i;
        // Dibuja el guión oscuro
        pincel.strokeStyle = "darkblue";
        pincel.beginPath();
        pincel.moveTo(t, 50);
        pincel.lineTo(t+50, 50);
        pincel.stroke(); 

        // Dibuja un espacio en blanco
        pincel.strokeStyle = "white";
        pincel.beginPath();
        pincel.moveTo(t+50, 50);
        pincel.lineTo(t+100, 50);
        pincel.stroke();
    }
}

// Función que escribe las letras de la palabra secreta sobre los guiones 
function escribirLetra(letras, indice){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("palabra");
    let pincel = pantalla.getContext("2d");

    // Establece el tamaño, color y fuente de las letras
    pincel.font = "40px Arial";
    pincel.fillStyle = "darkblue";
    
    
    // Escribe la letra sobre el guion
    let t = 30 * (2*indice - 1);
    pincel.fillText(letras[indice-1], t+15, 40);
}

// Esta funcion dibuja una parte del pivot por cada error
function dibujar(){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("ahorcado");
    let pincel = pantalla.getContext("2d");

    // Establece el color y el tamaño del trazo
    pincel.lineWidth = 5;
    pincel.strokeStyle = "darkblue";
    
    // Segun el numero de errores dibuja una parte del cuerpo
    if(errores==0){                         // Dibuja la cabeza
        pincel.beginPath();
        pincel.arc(300,100,30,0,2*3.14);    
        pincel.stroke();
        errores ++;
    }else if (errores==1){                  // Dibuaja el torzo
        pincel.beginPath();
        pincel.moveTo(300, 130);
        pincel.lineTo(300, 230);
        pincel.stroke();
        errores ++;
    }else if (errores==2){                  // Dibuja el brazo izquierdo
        pincel.beginPath();
        pincel.moveTo(300, 130);
        pincel.lineTo(250, 180);
        pincel.stroke();
        errores ++;
    }else if (errores==3){                  // Dibuja el brazo derecho
        pincel.beginPath();
        pincel.moveTo(300, 130);
        pincel.lineTo(350, 180);
        pincel.stroke();
        errores ++;
    }else if (errores==4){                  // Dibuja la pierna derecha
        pincel.beginPath();
        pincel.moveTo(300, 230);
        pincel.lineTo(350, 280);
        pincel.stroke();
        errores ++;
    }else if (errores==5){                  // Dibuja la pierna izquierda
        pincel.beginPath();
        pincel.moveTo(300, 230);
        pincel.lineTo(250, 280);
        pincel.stroke();
        errores ++;
    }

}

function ajustar(){
    document.getElementById("nuevojuego").style.margin = "0 35%"; 
    document.getElementById("ahorcado").style.margin = "0 16%";
    document.getElementById("ahorcado").style.width = "600px";
    document.getElementById("ahorcado").style.height = "370px";
    document.getElementById("palabra").style.margin = "0 20%";
    document.getElementById("palabra").style.width = "600px";
    document.getElementById("palabra").style.height = "100px";
    
}
// Funcion que borra el ahorcado y la palabra
function borrar(){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("ahorcado");
    let pincel = pantalla.getContext("2d");

    // Borramos todo el contenido del canvas
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);

    // Definimos la pantalla y pincel
    pantalla = document.getElementById("palabra");
    pincel = pantalla.getContext("2d");

    // Borramos todo el contenido del canvas
    pincel.clearRect(0, 0, pantalla.width, pantalla.height);
}

// Funcion pricipal que comprueba cada tecla presionada
function comprobar(event, check){
    // Comprobamos que la tecla sea una letra
    if (/^[a-zA-Z]$/g.test(event.key)) {
        // Comprobamos si la tecla presionada coincide con una letra de la palabra secreta
        if (letras.includes(event.key)) {
            // Obtenemos el indice del arreglo
            let indice = letras.indexOf(event.key) + 1;
            // Le enviamos a la funcion el arreglo y el indice
            escribirLetra(letras, indice);
            // eliminamos la letra escrita del arreglo
            letras[indice-1] = "";
            // volvemos a comprobar el arreglo para encontrar letrar repetidas
            comprobar(event);
            // Cambiamos el valor a true ya que la letra es correcta
            check = true;
        } else if(check == false){
            // Si la letra no es correcta dibuaja una parte del cuerpo
            dibujar();
        }
    }
}

function newgame(){
    ajustar();
    errores = 0;
    borrar();
    // Definimos un arreglo con las palabras disponibles 
    var palabrasDisponibles = ['gato', 'perro', 'elefante', 'jirafa', 'leon'];
    // Definimos la variable que va a contener la palabra secreta
    var palabrasecreta = escogerPalabra(palabrasDisponibles);
    // Dibujamos los guiones
    dibujarGuiones(palabrasecreta);
    // Divide la palabra secreta en un arreglo de letras
    letras = palabrasecreta.split("");
}


var errores = 0;
var letras = "";

// Obtenemos las teclas pulsadas del teclado
document.addEventListener("keydown", function(event) {
    // Definimos una variable que recuerde si la letra es correcta o incorrcta
    // hasta que se presione la proxima tecla
    var check = false;
    comprobar(event, check);
});