var errores = 0;
var palabrasecreta = "";
var palabrasDisponibles = ['gato', 'perro', 'elefante', 'jirafa', 'leon'];

// Función que escoge una palabra aleatoria de un arreglo de palabras disponibles
function escogerPalabra(palabrasDisponibles) {
    // Obtiene un índice aleatorio a partir del arreglo de palabras disponibles
    let indiceAleatorio = Math.floor(Math.random() * palabrasDisponibles.length);
    // Asigna la palabra seleccionada al valor de la variable "palabrasecreta"
    palabrasecreta = palabrasDisponibles[indiceAleatorio];
}

// Función que dibuja guiones en el canvas para cada letra de la palabra secreta
function dibujarGuiones(palabrasecreta){
    // Obtiene la referencia al canvas de la pantalla y crea un contexto de dibujo 2D
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
//prueba
escogerPalabra(palabrasDisponibles);
console.log(palabrasecreta);
dibujarGuiones(palabrasecreta);
//prueba

function dibujar(){
    let pantalla = document.getElementById("ahorcado");
    let pincel = pantalla.getContext("2d");
    pincel.lineWidth = 5;
    pincel.strokeStyle = "darkblue";
    
    if(errores==0){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.arc(300,170,30,0,2*3.14);
        pincel.stroke();
        errores ++;
    }else if (errores==1){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(350, 250);
        pincel.stroke();
        errores ++;
    }else if (errores==2){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(250, 250);
        pincel.stroke();
        errores ++;
    }else if (errores==3){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(300, 200);
        pincel.lineTo(300, 300);
        pincel.stroke();
        errores ++;
    }else if (errores==4){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(300, 300);
        pincel.lineTo(350, 350);
        pincel.stroke();
        errores ++;
    }else if (errores==5){
        pincel.fillStyle = "black";
        pincel.beginPath();
        pincel.moveTo(300, 300);
        pincel.lineTo(250, 350);
        pincel.stroke();
        errores ++;
    }

}