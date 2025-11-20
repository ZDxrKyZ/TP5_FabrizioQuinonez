document.getElementById("formExamen").addEventListener("submit", (e) => {
    e.preventDefault();

    let p1 = document.getElementById("p1").value.toLowerCase();
    let p2 = document.getElementById("p2").value.toLowerCase();
    let p3 = document.getElementById("p3").value.toLowerCase();

    let puntaje = 0;

    if (p1.includes("unidad central") || p1.includes("procesamiento")) puntaje++;
    if (p2.includes("software") || p2.includes("administra")) puntaje++;
    if (p3.includes("ejecutable")) puntaje++;

    alert(`Examen enviado.\nPuntaje obtenido: ${puntaje}/3`);
});
