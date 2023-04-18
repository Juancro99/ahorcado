
function dibujar(){
    let pantalla = document.getElementById("ahorcado");
    let pincel = pantalla.getContext("2d");

    
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(300,170,30,0,2*3.14);
    pincel.stroke();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(350, 250);
    pincel.stroke();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(250, 250);
    pincel.stroke();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300, 200);
    pincel.lineTo(300, 300);
    pincel.stroke();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300, 300);
    pincel.lineTo(350, 350);
    pincel.stroke();

    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.moveTo(300, 300);
    pincel.lineTo(250, 350);
    pincel.stroke();


}