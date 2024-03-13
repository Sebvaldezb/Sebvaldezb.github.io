const miTitulo = document.querySelector("h1");

let miBoton = document.querySelector("button");

let miImage  = document.querySelector("img");
miImage.onclick = function () {
    let miSrc = miImage.getAttribute("src");
    if (miSrc === "images/firefox-icon2.png") {
        miImage.setAttribute("src", "images/firefox2.png");
    } else {
        miImage.setAttribute("src", "images/firefox-icon2.png");      
    }
};

// Creacion de una funcion
function estableceNombreUsuario() {
    let miNombre = prompt("Introduzca su nombre.");
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem("nombre", miNombre);
        miTitulo.textContent = "Mozilla es genial, " + miNombre;
    }
    
}

// Codigo de inicializacion
if (!localStorage.getItem("nombre")) {
    estableceNombreUsuario();
} else {
    let nombreAlmacenado = localStorage.getItem("nombre");
    miTitulo.textContent = "Mozilla es genial," + nombreAlmacenado;
}

// evento que manipula el boton
miBoton.onclick = function () {
    estableceNombreUsuario();
}
