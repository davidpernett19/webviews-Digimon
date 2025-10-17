const evoluciones = {
  agumon: {
    nombre: "Greymon",
    imagen: "images/greymon.png",
    descripcion: "Greymon es la evolución de Agumon. Posee una gran fuerza y un ataque de fuego llamado 'Mega Flame'.",
  },
  gabumon: {
    nombre: "Garurumon",
    imagen: "images/garurumon.png",
    descripcion: "Garurumon es la evolución de Gabumon. Es un Digimon lobo cubierto de piel azul, rápido y feroz en combate.",
  },
  palmon: {
    nombre: "Ikkakumon",
    imagen: "images/ikkakumon.png",
    descripcion: "Ikkakumon es la evolución de Gomamon. Un Digimon marino fuerte y valiente que lanza misiles desde su cuerno con su ataque 'Harpoon Torpedo'.",
  },
};

function mostrarEvolucion(nombre) {
  const evo = evoluciones[nombre];
  document.getElementById("nombreEvolucion").textContent = evo.nombre;
  document.getElementById("imgEvolucion").src = evo.imagen;
  document.getElementById("descripcionEvolucion").textContent = evo.descripcion;
  document.getElementById("modal").classList.remove("oculto");
}

function cerrarModal() {
  document.getElementById("modal").classList.add("oculto");
}
