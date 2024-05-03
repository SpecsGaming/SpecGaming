
document.getElementById('descubrirBtn').addEventListener('click', function () {
    var nuevaSeccion = document.getElementById('nuevaSeccion');
    var navbar = document.getElementById('navbar').style.background = "linear-gradient(to right, #000000, #2fc468)";
    // Cambiar la altura de la nueva sección para hacerla visible
    nuevaSeccion.style.height = "auto";
    // Agregar una clase al navbar para cambiar el fondo
    window.scrollTo({ top: nuevaSeccion.offsetTop, behavior: 'smooth' });
});