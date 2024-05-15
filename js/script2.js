const juegos = [
    { nombre: "The Legend of Zelda: Breath of the Wild", genero: "Aventura", imagen: "path/to/zelda.jpg" },
    { nombre: "Super Mario Odyssey", genero: "Aventura", imagen: "path/to/mario.jpg" },
    { nombre: "Minecraft", genero: "Simulación", imagen: "path/to/minecraft.jpg" },
    { nombre: "Fortnite", genero: "Acción", imagen: "path/to/fortnite.jpg" },
    { nombre: "Gran Turismo 7", genero: "Carreras", imagen: "path/to/granturismo.jpg" }
];

function mostrarJuegos(juegos) {
    const gamesContainer = document.getElementById("gamesContainer");
    gamesContainer.innerHTML = "";

    juegos.forEach(juego => {
        const gameCard = document.createElement("div");
        gameCard.classList.add("col-md-12", "mb-4");
        gameCard.innerHTML = `
            <div class="card h-100">
                <img src="${juego.imagen}" class="card-img-top" alt="${juego.nombre}">
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

function filtrarJuegosPorNombre(juegos, filtro) {
    return juegos.filter(juego =>
        juego.nombre.toLowerCase().includes(filtro.toLowerCase())
    );  
}

function filtrarJuegosPorGenero(juegos, generos) {
    return juegos.filter(juego =>
        generos.includes(juego.genero)
    );
}

function buscarJuegos() {
    const searchTerm = document.getElementById("searchInput").value;
    const juegosFiltrados = filtrarJuegosPorNombre(juegos, searchTerm);
    mostrarJuegos(juegosFiltrados);
}
 document.addEventListener("DOMContentLoaded", () => {
    mostrarJuegos(juegos);

    document.getElementById("filterButton").addEventListener("click", () => {
        const filterOptions = document.getElementById("filterOptions");
        filterOptions.style.display = filterOptions.style.display === "none" ? "block" : "none";
    });

    document.getElementById("applyFiltersButton").addEventListener("click", () => {
        const selectedGeneros = Array.from(document.querySelectorAll('#filterOptions input[type="checkbox"]:checked'))
            .map(checkbox => checkbox.value);

        const searchTerm = document.getElementById("searchInput").value;
        let juegosFiltrados = filtrarJuegosPorNombre(juegos, searchTerm);

        if (selectedGeneros.length > 0) {
            juegosFiltrados = filtrarJuegosPorGenero(juegosFiltrados, selectedGeneros);
        }

        mostrarJuegos(juegosFiltrados);
    });

    document.getElementById("searchInput").addEventListener("input", buscarJuegos);
});
