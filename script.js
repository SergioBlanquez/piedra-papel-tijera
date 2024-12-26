
//Objeto para determinar las reglas del juego
const reglas = {
    "piedra": ["tijera"],
    "papel": ["piedra"],
    "tijera": ["papel"]
};


function quienGana(valor) {

    //Desmarcar cualquier seleccion anterior
    const elementos = document.querySelectorAll('.elementos');
    elementos.forEach(el => {
        el.style.border = "";
        el.style.backgroundColor = "";
        el.style.transform = "scale(1)";
    });

    let userSelection = valor;
    console.log("El usuario ha seleccionado: " + userSelection);


//Generamos un numero aleatorio para el pc
    let numAtleatorio = Math.floor(Math.random() * 3);
    let pcSelection = "";

    if (numAtleatorio === 0) {
        pcSelection = "piedra";
    } else if (numAtleatorio === 1) {
        pcSelection = "papel";
    } else {
        pcSelection = "tijera"
    }

    console.log("la seleccion del pc es: " + pcSelection)


    //Comprobamos ganador o empate
    if (userSelection === pcSelection){

        let user = document.getElementById(userSelection)
        user.style.border = "solid 2px rgb(255, 255, 255)";
        user.style.backgroundColor = "rgb(153, 153, 153)";
        user.style.transform = "scale(1.1)";

        //Suma 1 punto cuando ha ganado el pc
        let draw = document.getElementById("draw");
        draw.textContent = parseInt(draw.textContent) + 1;

    }else if (reglas[userSelection].includes(pcSelection)){

        user = document.getElementById(userSelection)
        user.style.border = "solid 2px rgb(9, 255, 0)";
        user.style.backgroundColor = "rgb(86, 202, 86)";
        user.style.transform = "scale(1.1)";

        //Suma 1 punto cuando ha ganado el usuario
        let userScore = document.getElementById("userScore");
        userScore.textContent = parseInt(userScore.textContent) + 1;

        let pc = document.getElementById(pcSelection)
        pc.style.border = "solid 2px rgb(255, 255, 255)";
        pc.style.backgroundColor = "rgb(153, 153, 153)";
        pc.style.transform = "scale(1.1)";

    }else{

        user = document.getElementById(userSelection)
        user.style.border = "solid 2px rgb(255, 0, 0)";
        user.style.backgroundColor = "rgb(219, 56, 56)";
        user.style.transform = "scale(1.1)";

        pc = document.getElementById(pcSelection)
        pc.style.border = "solid 2px rgb(255, 255, 255)";
        pc.style.backgroundColor = "rgb(153, 153, 153)";
        pc.style.transform = "scale(1.1)";

        //Suma 1 punto cuando ha ganado el pc
        let pcScore = document.getElementById("pcScore");
        pcScore.textContent = parseInt(pcScore.textContent) + 1;
    }

}

// Funcion que devuelve valor cero a los marcadores
function reset(){
    document.getElementById("pcScore").textContent = 0;
    document.getElementById("userScore").textContent = 0;
    document.getElementById("draw").textContent = 0;

    const elementos = document.querySelectorAll('.elementos');
    elementos.forEach(el => {
        el.style.border = "";
        el.style.backgroundColor = "";
        el.style.transform = "scale(1)";
    });
}



//Añadimos EventListeners
document.getElementById('piedra').addEventListener('click', function () {
    quienGana('piedra');
});

document.getElementById('papel').addEventListener('click', function () {
    quienGana('papel');
});

document.getElementById('tijera').addEventListener('click', function () {
    quienGana('tijera');
});

document.getElementById('reset').addEventListener('click', reset);