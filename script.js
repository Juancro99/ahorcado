var errores = 0;
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