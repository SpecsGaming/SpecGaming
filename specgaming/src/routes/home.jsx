import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Asegúrate de que esta ruta sea correcta
import tuerca from '../assets/Tuerca.webp';
import flecha from '../assets/Flecha.svg';

const Home = () => {
  useEffect(() => {
    // Deshabilitar el desplazamiento con el teclado
    const handleKeyDown = (event) => {
      if ([32, 37, 38, 39, 40].includes(event.keyCode)) {
        event.preventDefault();
      }
    };

    // Deshabilitar el desplazamiento con el ratón
    const handleScroll = (event) => {
      event.preventDefault();
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleScroll, { passive: false });
    window.addEventListener('touchmove', handleScroll, { passive: false });

    // Limpiar eventos al desmontar el componente
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchmove', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      <style>
        {`
          body {
            overflow: hidden;
          }
        `}
      </style>
      <Navbar />
      <div className="flex flex-col items-start justify-center pt-24 relative z-10 pl-10 lg:pl-20 mt-16">
        <div className="text-left">
          <h1 className="text-7xl font-bold leading-tight">
            RECOMENDA<br />
            DOR DE<br />
            <span style={{ color: '#eefa04' }}>VIDEOJUEGOS</span>
          </h1>
          <Link to="/recomendador">
            <button className="mt-20 text-black font-bold text-xl px-8 py-3 rounded-full transition-all duration-300 ease-in-out" style={{ backgroundColor: '#eefa04' }}>
              DESCÚBRELO
            </button>
          </Link>
        </div>
      </div>
      <img src={flecha} alt="Flecha" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 w-20 h-20 animate-bounce" style={{ color: '#eefa04' }} /> {/* Ajuste de tamaño y animación */}
      <img src={tuerca} alt="Tuerca" className="absolute right-0 bottom-0 mb-4 mr-4 w-2/5 h-auto object-cover opacity-20 lg:opacity-100" /> {/* Ajuste del tamaño */}
    </div>
  );
};

export default Home;
