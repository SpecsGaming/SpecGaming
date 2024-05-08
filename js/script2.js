// Datos de ejemplo de juegos (puedes sustituirlos por tu propio conjunto de datos)
const juegos = [
    { nombre: "Juego 1", genero: "Aventura" },
    { nombre: "Juego 2", genero: "Estrategia" },
    { nombre: "Juego 3", genero: "Acción" },
    // Agrega más juegos según necesites
];

// Función para mostrar los juegos según la búsqueda y los filtros
function mostrarJuegos(juegos) {
    const gamesContainer = document.getElementById("gamesContainer");
    gamesContainer.innerHTML = "";

    juegos.forEach(juego => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("col-md-4");
        gameCard.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${juego.nombre}</h5>
                    <p class="card-text">${juego.genero}</p>
                </div>
            </div>
        `;

        const newRow = document.createElement("div");
        newRow.classList.add("row");
        newRow.appendChild(gameCard);

        gamesContainer.appendChild(newRow);
    });
}   

// Función para filtrar juegos por nombre
function filtrarJuegosPorNombre(juegos, filtro) {
    return juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(filtro.toLowerCase())
    );
}

// Función para manejar la búsqueda de juegos
function buscarJuegos() {
    const searchTerm = document.getElementById("searchInput").value;
    const juegosFiltrados = filtrarJuegosPorNombre(juegos, searchTerm);
    mostrarJuegos(juegosFiltrados);
}

// Mostrar todos los juegos al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    mostrarJuegos(juegos);
});

// Manejar la búsqueda de juegos en tiempo real
document.getElementById("searchInput").addEventListener("input", buscarJuegos);