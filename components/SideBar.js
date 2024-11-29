// /components/Sidebar.js
const Sidebar = () => {
  return (
    <aside className="w-64 h-full bg-gray-800 text-white">
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Gestión de Usuarios</li>
          <li>Gestión del Inventario</li>
          <li>Consultas Avanzadas</li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
