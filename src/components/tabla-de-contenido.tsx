import { Link } from "react-router-dom";
export function TablaTareas() {
  return (
    <div className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-18">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img className="h-16 " src="/assets/otros/logo.jpg" alt="Logo" />
            </Link>
            <div className="hidden md:ml-6 md:flex md:space-x-8">
              <Link to="/" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Inicio</Link>
              <Link to="/Docente" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Docentes</Link>
              <Link to="/Estudiantes" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Estuduantes</Link>
              <Link to="/Contacto" className="text-gray-300 hover:text-white flex items-center px-3 py-2 rounded-md text-sm font-medium">Contacto</Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link to="/Inicio-de-sesion"><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">Iniciar sesión</button></Link>
            <Link to="/Registro"><button className="bg-gray-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Registrarse</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}