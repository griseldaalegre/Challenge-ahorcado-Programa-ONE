function dibujarCanvas() {
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5F6";
    tablero.strokeStyle = "black";

    tablero.fillStyle = 'rgba(225,225,225,0.7)';
    tablero.fillRect(0, 0, 1000, 460);
    tablero.globalAlpha = 1;
    tablero.beginPath();
    tablero.moveTo(50, 175);
    tablero.lineTo(200, 175);
    tablero.moveTo(125, 175);
    tablero.lineTo(125, 50);
    tablero.moveTo(125, 50);
    tablero.lineTo(175, 50);

    tablero.moveTo(175, 50);
    tablero.lineTo(175,  75);
    tablero.fill();
    tablero.closePath();

    tablero.font = 'bold 20px Inter';
    tablero.fillStyle = "black";
    tablero.fillText("Errores:", 50 , 325);



    tablero.font = 'bold 40px Inter';
    tablero.closePath();
}

function dibujarLinea() {
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
   // tablero.fillStyle = "#F3F5F6";

    let anchura = 300 / palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++) {

        tablero.moveTo(50 + (anchura * i), 270)
        tablero.lineTo(75 + (anchura * i), 270)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta(index) {
    tablero.fillStyle = "black";
    tablero.font = 'bold 24px Inter';
    tablero.LineWidth = 2;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "green";
   

    let anchura = 300 / palabraSecreta.length;
    tablero.fillText(palabraSecreta[index], 52 + (anchura * index), 255);
    tablero.stroke();

    console.log("escribo" + palabraSecreta[index]);
}

function escribirLetraIncorrecta(letra, errorsLeft) {
    tablero.font = 'bold 20px Inter';
    tablero.LineWidth = 2;
    tablero.LineCap = "round";
    tablero.LineJoin = "round";
    tablero.fillStyle = "black";
    tablero.fillText(letra, 50 + (20 * (5 -errorsLeft)), 360);
    console.log("escribo" + letra);
}


function dibujarCuerpo(error) {
    switch (error) {
        case 5:
            // CABEZA
            let r = 13;
            tablero.moveTo(187, 87);
            tablero.arc(175, 87, r, 0, (Math.PI / 180) * 360, false);
            tablero.stroke();
            break;
        case 4:
            // torzo
            tablero.moveTo(175, 100);
            tablero.lineTo(175, 125);
            tablero.stroke();
            break;
        case 3:
            // BRAZO 1
            tablero.moveTo(175, 112);
            tablero.lineTo(192, 117);
            tablero.stroke();
            break;
        case 2:
            // BRAZO 2
            tablero.moveTo(175, 112);
            tablero.lineTo(157, 117);
            tablero.stroke();
            break;
        case 1:
            // PIERNA 1
            tablero.moveTo(175, 125);
            tablero.lineTo(187, 150);
            tablero.stroke();
            break;
        case 0:
            // PIERNA 2
            tablero.moveTo(175, 125);
            tablero.lineTo(162, 150);
            tablero.stroke();
            break;

    }


}

