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
    nombre: "Togemon",
    imagen: "images/ikkakumon.png",
    descripcion: "Togemon es la evolución de Palmon. Es un cactus gigante que ataca con sus poderosos puños espinosos.",
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
