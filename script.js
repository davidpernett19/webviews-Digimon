const evoluciones = {
  agumon: { nombre: "Greymon", imagen: "images/01 greymon.png" },
  gabumon: { nombre: "Garurumon", imagen: "images/03 Garurumon.png" },
  palmon: { nombre: "Togemon", imagen: "images/02 ikkakumon.png" },
};

function mostrarEvolucion(nombre) {
  const evo = evoluciones[nombre];
  document.getElementById("nombreEvolucion").textContent = evo.nombre;
  document.getElementById("imgEvolucion").src = evo.imagen;
  document.getElementById("evolucion").classList.remove("oculto");
}

function cerrarEvolucion() {
  document.getElementById("evolucion").classList.add("oculto");
}
