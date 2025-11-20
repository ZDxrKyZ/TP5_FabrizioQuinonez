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

document.addEventListener("DOMContentLoaded", () => {

    const selectCursos = document.getElementById("cursos");
    const chipsContainer = document.getElementById("chipsContainer");

    function actualizarChips() {
        // Limpia el contenedor
        chipsContainer.innerHTML = "";

        // Obtiene los textos de las opciones seleccionadas
        const seleccionados = Array.from(selectCursos.selectedOptions)
                                   .map(opt => opt.textContent);

        // Genera chips
        seleccionados.forEach(curso => {
            const chip = document.createElement("span");
            chip.classList.add("chip");
            chip.textContent = curso;

            // Opción: agregar botón X para quitar la selección
            const x = document.createElement("span");
            x.textContent = " ✕ ";
            x.style.cursor = "pointer";
            x.style.marginLeft = "4px";
            x.onclick = () => deseleccionarCurso(curso);

            chip.appendChild(x);
            chipsContainer.appendChild(chip);
        });
    }

    function deseleccionarCurso(cursoTexto) {
        // Recorremos todas las opciones y quitamos la selección
        for (let opt of selectCursos.options) {
            if (opt.textContent === cursoTexto) {
                opt.selected = false;
                break;
            }
        }
        actualizarChips();
    }

    // Evento cuando el usuario selecciona o deselecciona
    selectCursos.addEventListener("change", actualizarChips);

    // Render inicial (por si ya hay seleccionados)
    actualizarChips();
});
