function leer() {
    return document.getElementById("todo").value
}

function agregar() {
    nodo = document.createElement("li")
    texto = document.createTextNode(leer())
    //console.log(texto)
    nodo.appendChild(texto)
    nodo.setAttribute("id", leer())
    document.getElementById("lista").appendChild(nodo)
}

function buscar() {
    // buscar por id
    listaTodo = document.getElementsByTagName("li")
    for (const tarea of listaTodo) {
        if (leer() == tarea.textContent)
            console.log("ya existe")

    }
    
}