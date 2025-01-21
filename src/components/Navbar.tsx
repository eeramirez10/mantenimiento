import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink
              to="/"
              className="text-lg font-bold hover:text-blue-200"
            >
              MantenimientoApp
            </NavLink>
          </div>
          <div className="flex space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-200 ${
                  isActive ? 'text-blue-200 underline' : ''
                }`
              }
            >
              Lista de Equipos
            </NavLink>
            <NavLink
              to="/add"
              className={({ isActive }) =>
                `text-sm font-medium hover:text-blue-200 ${
                  isActive ? 'text-blue-200 underline' : ''
                }`
              }
            >
              Agregar Equipo
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
