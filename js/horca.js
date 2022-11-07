let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = []; 
let oportunidades = 6;
let palabraSecretaConteo = 0;


function escojerPalabraSecreta() {

    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}


function agregarNuevaPalabra() {
    document.onkeydown = async (e) => {

    }
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";
    document.getElementById("palabra-container").style.display = "block";
    document.getElementById("guardar-palabra").style.display = "block";
    document.getElementById("cancelar-palabra").style.display = "block";
}
function cancelar() {
    document.getElementById("palabra-box").value = "";
    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementById("palabra-container").style.display = "none";
    document.getElementById("guardar-palabra").style.display = "none";
    document.getElementById("cancelar-palabra").style.display = "none";

}

function guardar() {
    palabras.push(document.getElementById("palabra-box").value.toUpperCase());
    document.getElementById("palabra-box").value = "";
    document.getElementById("palabra-container").style.display = "none";
    document.getElementById("guardar-palabra").style.display = "none";
    document.getElementById("cancelar-palabra").style.display = "none";
    iniciarJuego();
}

function iniciarJuego() {
    document.getElementById("botones-game").style.display = "flex";
    document.getElementsByClassName("container-canvas")[0].style.display = "block"
    document.getElementById("div-desaparece").style.display = "none";
    document.getElementById("iniciar-juego").style.display = "none";
    document.getElementById("agregar-palabra").style.display = "none";
    document.getElementById("palabra-container").style.display = "none";

    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    palabraSecretaConteo = palabraSecreta.length;
    document.onkeydown = async (e) => {
        if (oportunidades !== 0) {
            if (comprobarTeclaValida(e)) { 
                let letra = e.key.toUpperCase();
                if (comprobarLetrasUsadas(letra)) { 
                    if (palabraSecreta.includes(letra)) {
                        for (let i = 0; i < palabraSecreta.length; i++) {
                            if (palabraSecreta[i] === letra) {
                                escribirLetraCorrecta(i);
                                palabraSecretaConteo = palabraSecretaConteo - 1
                                setTimeout(() => {
                                    controlGame()
                                }, 200);
                            }
                        }
                    } else {
                        anadirLetraIncorrecta();
                        escribirLetraIncorrecta(letra, oportunidades);
                        dibujarCuerpo(oportunidades);
                    }
                }

            } else {
                alert("Oprima unatecla que sea letra")
            }
        }
        setTimeout(() => {
            controlGame()
        }, 200);
    }
}

function controlGame() {
    if (oportunidades === 0) {
        tablero.clearRect(0, 0, document.getElementById("forca").width, document.getElementById("forca").height);
        document.getElementById('forca').style.backgroundImage = "url('https://i.gifer.com/origin/d8/d8c3e2ac4f242294abb440f38c623013.gif')";
        document.getElementById('forca').style.backgroundRepeat = "no-repeat";
        document.getElementById('forca').style.backgroundSize = "contain";
        document.getElementById('forca').style.backgroundPosition = "center"
        document.getElementById("div-desaparece").style.display = "flex";
        document.getElementById("reiniciar-juego").style.display = "block";
        document.getElementById("abandonar-juego").style.display = "block";

        document.getElementById("botones-game").style.display = "none";

        document.onkeydown = async (e) => {
            e.preventDefault();
        }

    } else if (palabraSecretaConteo === 0) {
        tablero.clearRect(0, 0, document.getElementById("forca").width, document.getElementById("forca").height);
        document.getElementById('forca').style.backgroundImage = "url('https://images.pond5.com/retro-vhs-screen-featuring-you-footage-103548680_iconl.jpeg')";
        document.getElementById('forca').style.backgroundRepeat = "no-repeat";
        document.getElementById('forca').style.backgroundSize = "contain";
        document.getElementById('forca').style.backgroundPosition = "center"
        document.getElementById("div-desaparece").style.display = "flex";
        document.getElementById("reiniciar-juego").style.display = "block";
        document.getElementById("abandonar-juego").style.display = "block";//agregrue
        document.getElementById("botones-game").style.display = "none";


        document.onkeydown = async (e) => {
            e.preventDefault();
        }
    }
}


function comprobarTeclaValida(key) {
    if (key.keyCode >= 65 && key.keyCode <= 90 || key.keyCode === 192) {
        return true;
    } else {
        return false;
    }
}

function comprobarLetrasUsadas(letra) {

    if (letras.indexOf(letra) == -1) {
        letras.push(letra);
        console.log(letra);

        return true
    } else {
        console.log(letra);
        return false
    }

}

function anadirLetraIncorrecta() {
    oportunidades = oportunidades - 1;
    console.log(oportunidades);
}

function reiniciarJuego() {
    tablero.clearRect(0, 0, document.getElementById("forca").width, document.getElementById("forca").height);
    palabraSecreta = "";
    letras = [];
    oportunidades = 6; 

    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("reiniciar-juego").style.display = "none";
    document.getElementById('forca').style.backgroundImage = "none";
    document.getElementById("botones-game").style.display = "none";
    document.getElementById("cancelar-palabra").style.display = "none";

    iniciarJuego();
}

function desistir() {
    alert('Usted perdio. La palabra era ' + palabraSecreta)
    tablero.clearRect(0, 0, document.getElementById("forca").width, document.getElementById("forca").height);
    document.getElementById("botones-game").style.display = "none";
    document.getElementById("abandonar-juego").style.display = "none";
    document.getElementById("div-desaparece").style.display = "flex";
    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementsByClassName("container-canvas")[0].style.display = "none"

}

function abandonarJuego() {
    document.getElementById('forca').style.backgroundImage = "none";
    document.getElementById("reiniciar-juego").style.display = "none";
    document.getElementById("div-desaparece").style.display = "flex";
    document.getElementById("iniciar-juego").style.display = "block";
    document.getElementById("agregar-palabra").style.display = "block";
    document.getElementsByClassName("container-canvas")[0].style.display = "none"
    document.getElementById("abandonar-juego").style.display = "none";
   
}


