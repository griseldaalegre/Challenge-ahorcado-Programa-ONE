//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT", "HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";
let letras = []; //va a almacenar las letras durante la ejecucion de nuestra logica
let oportunidades = 8; //numero de oportunidades
let palabraSecretaConteo = 0;


//PalabraSecreta

function escojerPalabraSecreta() {
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra;
    console.log(palabraSecreta);
}

//Iniciar juego
function iniciarJuego() {
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta();
    dibujarCanvas();
    dibujarLinea();
    palabraSecretaConteo = palabraSecreta.length;
    document.onkeydown = (e) => {

        if (comprobarTeclaValida(e)) { // compruebo si es unateclavalida y no un ENTER por ejemplo
            let letra = e.key.toUpperCase(); // de la tecla me quedo con la letra por que ya se que es valia
            if (comprobarLetrasUsadas(letra)) { // compruebo si ya use la letra , si no la use continuo
                if (palabraSecreta.includes(letra)) { // compruebo que la letra este en la palabra
                    for (let i = 0; i < palabraSecreta.length; i++) {
                        if (palabraSecreta[i] === letra) {
                            escribirLetraCorrecta(i);
                            setTimeout(() => {
                                controlGane()
                            }, 200);
                        }
                    }
                } else {
                    anadirLetraIncorrecta();
                    escribirLetraIncorrecta(letra, oportunidades);
                    if (oportunidades === 0) {
                        alert("perdiste");
                        reiniciarJuego()
                    }
                }
            }

        } else {
            alert("Oprima unatecla que sea letra")
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


//el parametro (key)letra es un metodo, este metodo va recibir datos con la entrada el teclado
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
    oportunidades = oportunidades - 1; //el puso -=
    console.log(oportunidades);
}

function reiniciarJuego() {
    let palabraSecreta = "";
    let letras = []; //va a almacenar las letras durante la ejecucion de nuestra logica
    let oportunidades = 8; //numero de oportunidades 
    tablero.clearRect(0, 0, document.getElementById("forca").width, document.getElementById("forca").height);
    document.getElementById("iniciar-juego").style.display = "block";
}
function controlGane() {
    palabraSecretaConteo = palabraSecretaConteo - 1
    if (palabraSecretaConteo === 0) {
        alert("ganaste")
        reiniciarJuego()
    }
}