document.getElementById("formInscripcion").addEventListener("submit", (e) => {
    e.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let email = document.getElementById("email").value;
    let cursos = Array.from(document.getElementById("cursos").selectedOptions)
                      .map(op => op.text);

    alert(`Inscripción completada:\n
Nombre: ${nombre}
Apellido: ${apellido}
Email: ${email}
Cursos seleccionados: ${cursos.join(", ")}`);
});
