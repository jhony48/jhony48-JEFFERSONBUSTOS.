// CALCULADORA ECOLÓGICA
function calcularImpacto(){

    let kilos = document.getElementById("kilos").value;

    if(kilos === ""){
        document.getElementById("resultado").innerHTML =
        "Ingrese una cantidad válida";

    }else{

         let contaminacion = kilos * 2;
        let arboles = (kilos / 5).toFixed(1);

        document.getElementById("resultado").innerHTML =
        "Has ayudado a reducir aproximadamente " +
        ahorro +
        " kg de contaminación.";
    }
}

// VALIDACIÓN FORMULARIO
function validarFormulario(){

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    if(nombre === "" || correo === "" || mensaje === ""){

        document.getElementById("respuesta").innerHTML =
        "Complete todos los campos";

    }else{

        document.getElementById("respuesta").innerHTML =
        "Mensaje enviado correctamente";
    }
}


const botonModo = document.getElementById("modoBtn");

if(botonModo){

    botonModo.addEventListener("click", () => {

        document.body.classList.toggle("dark");
    });
}