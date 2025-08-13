// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
console.log(amigos);

function agregarAmigo (nombre) {
     let input = document.getElementById('amigo').value;
     console.log(input);
     if (input.trim() === "") {
          alert("Por favor, ingrese un nombre");
     }
     ActualizarListaAmigos();
     limpiarNombre();

}

function ActualizarListaAmigos () {
     let listaAmigos = document.getElementById('amigo');
     amigos.push(listaAmigos.value);
     console.log(amigos);
     return amigos;
}

function limpiarNombre () {
     document.querySelector("#amigo").value = "";
     return;
}
