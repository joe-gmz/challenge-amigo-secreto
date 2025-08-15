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
     listaDeAmigos();
     return amigos;
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

function listaDeAmigos () {
     let lista = document.getElementById('listaAmigos');
     lista.innerHTML = "";
     amigos.forEach(function (amigo) {
          let li = document.createElement('li');
          li.textContent = amigo;
          lista.appendChild(li);
     });
     return amigos;
}

function sortearAmigo () {
     if (amigos.length === 0) {
          alert("Debes agregar al menos un amigo para sortear");
          return;
     }
     let seleccionarAmigoAleaorio = Math.floor(Math.random() * amigos.length);
     let amigoSeleccionado = amigos[seleccionarAmigoAleaorio];
     console.log(seleccionarAmigoAleaorio);
     console.log(amigoSeleccionado);
     document.getElementById("resultado").innerHTML = amigoSeleccionado;
}

sortearAmigo();
