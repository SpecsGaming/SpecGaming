import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/Logo.webp';


const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className="bg-transparent fixed top-0 w-full z-50">
        <div className="flex flex-wrap items-center justify-between">
            <div className="flex items-center">
            <Link to="/" className="flex items-center">
                <img src={logo} alt="Logo" className="w-24 h-24 mr-2" />
                <h1 className="text-white font-bold text-xl">SPECGAMING</h1>
            </Link>
            </div>
            <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div
            className={
                "lg:flex flex-grow items-center" +
                (navbarOpen ? " flex" : " hidden")
            }
            id="navbarNavAltMarkup"
            >
            <div className="flex items-center list-none lg:mr-auto">
                <Link className="nav-item nav-link animate-underline text-white text-lg mx-4 mt-4 lg:mt-0 ml-12 hover:text-yellow-400" to="/">INICIO</Link>
                <Link className="nav-item nav-link animate-underline text-white text-lg mx-2 mt-4 lg:mt-0 hover:text-yellow-400" to="/gameslist">BUSCADOR</Link>
                <Link className="nav-item nav-link animate-underline text-white text-lg mx-2 mt-4 lg:mt-0 hover:text-yellow-400" to="/recomendador">RECOMENDADOR</Link>
            </div>
            <div className="flex items-center mt-4 lg:mt-0 lg:ml-4">
                <Link to="/login" className="nav-item nav-link animate-underline text-white text-lg mx-2 hover:text-yellow-400">INICIAR SESIÓN</Link>
                <Link to="/register" className="btn btn-lg text-black bg-yellow-400 hover:bg-yellow-300 text-lg px-6 py-2 rounded-full mx-2 mt-2 lg:mt-0">Registrarse</Link>
            </div>
            </div>
        </div>
        </nav>
    );
};

export default Navbar;
