// Definimos una variable que cuente los errores
var errores = 0;
// Definimos la variable que va a contener la palabra secreta
var palabrasecreta = "";
// Definimos un arreglo con las palabras disponibles 
var palabrasDisponibles = ['gato', 'perro', 'elefante', 'jirafa', 'leon'];

// Obtenemos las teclas plusadas del teclado (sin uso actualmente)
document.addEventListener("keydown", function(event) {
    // Imprimimos las teclas en la consola
    console.log(event.key);
  });
  
// Función que escoge una palabra aleatoria de un arreglo de palabras disponibles
function escogerPalabra(palabrasDisponibles) {
    // Obtiene un índice aleatorio a partir del arreglo de palabras disponibles
    let indiceAleatorio = Math.floor(Math.random() * palabrasDisponibles.length);
    // Asigna la palabra seleccionada al valor de la variable "palabrasecreta"
    palabrasecreta = palabrasDisponibles[indiceAleatorio];
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
function escribirLetras(palabrasecreta){
    // Definimos la pantalla y pincel
    let pantalla = document.getElementById("palabra");
    let pincel = pantalla.getContext("2d");

    // Establece el tamaño, color y fuente de las letras
    pincel.font = "40px Arial";
    pincel.fillStyle = "darkblue";
    
    // Divide la palabra secreta en un arreglo de letras
    var letras = palabrasecreta.split("");
    
    // Escribe las letras en el canvas
    for(let i = 1; i <= letras.length; i++){
        let t = 30 * (2*i - 1);
        pincel.fillText(letras[i-1], t+15, 40);
    }
}
//prueba
escogerPalabra(palabrasDisponibles);
console.log(palabrasecreta);
dibujarGuiones(palabrasecreta);
//prueba

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
        pincel.arc(300,170,30,0,2*3.14);    
        pincel.stroke();
        errores ++;
    }else if (errores==1){                  // Dibuaja el torzo
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(300, 300);
        pincel.stroke();
        errores ++;
    }else if (errores==2){                  // Dibuja el brazo izquierdo
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(250, 250);
        pincel.stroke();
        errores ++;
    }else if (errores==3){                  // Dibuja el brazo derecho
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(350, 250);
        pincel.stroke();
        errores ++;
    }else if (errores==4){                  // Dibuja la pierna derecha
        pincel.beginPath();
        pincel.moveTo(300, 300);
        pincel.lineTo(350, 350);
        pincel.stroke();
        errores ++;
    }else if (errores==5){                  // Dibuja la pierna izquierda
        pincel.beginPath();
        pincel.moveTo(300, 300);
        pincel.lineTo(250, 350);
        pincel.stroke();
        errores ++;
    }

}