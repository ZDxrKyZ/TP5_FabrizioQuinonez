document.addEventListener("DOMContentLoaded", () => {
    let nombre = prompt("Ingrese su Nombre:");
    let apellido = prompt("Ingrese su Apellido:");

    if (nombre && apellido) {
        document.getElementById("titulo-bienvenida").innerText =
            `Bienvenido/a, ${nombre} ${apellido}`;
    }
});
