// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let imput = document.getElementById('amigo');
let lista = document.getElementById('listaAmigos');
let resultadoNombre = document.getElementById('resultado')
 
//function verificar generar alertas si la caja esta en blanco o nombre repetido
function agregarAmigo() {
    let nombre = imput.value.trim();
    if (nombre === "") {
        alert("Por favor, digite un nombre.");
        return;
    }
    
    if (!amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
    } else {
        alert(`El nombre ${nombre} ya ha sido agregado.`);
    }
    
    imput.value = "";
}
//function agregar nombres a la lista
function actualizarLista() {
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//function sortear amigos.
function sortearAmigo (){
    if (amigos.length <= 2){
        alert('Requieres mas de dos amigos para el sorteo');
        return;
    }
    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSeleccionado = amigos[amigoAleatorio];

     // Mostrar el resultado en el DOM
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = nombreSeleccionado; // Mostrar solo el nombre seleccionado
    setTimeout(reiniciarJuego, 3000);
}
function reiniciarJuego() {
    amigos = []; // Vaciar la lista de amigos

    // Limpiar la lista de amigos en el DOM
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    // Limpiar el resultado del sorteo
    let resultadoHTML = document.getElementById("resultado");
    resultadoHTML.innerHTML = "";

    // Deshabilitar el botón de sortear
    document.querySelector(".button-draw").disabled = true;

    // Limpiar la caja de texto
    limpiarCaja();
}

document.getElementById("amigo").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        agregarAmigo();
    }
});

