function agregarTarea() {
    let nuevaTareaTexto = document.getElementById("nuevaTarea").value;

    if (nuevaTareaTexto === "") {
        alert("Por favor ingrese una tarea");
        return;
    }

    // Crear el <li>
    let nuevaTarea = document.createElement("li");

    // Para controlar mejor la alineación del texto con un span
    let textoTarea = document.createElement("span");
    textoTarea.textContent = nuevaTareaTexto;

    // Botón eliminar
    let botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";          

    // Funcionalidad
    botonEliminar.onclick = function() { nuevaTarea.remove(); }

    // Armamos el li
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar elemento/tarea a la lista
    document.getElementById("listaTareas").appendChild(nuevaTarea);

    // Limpiar input 
    document.getElementById("nuevaTarea").value = "";
}