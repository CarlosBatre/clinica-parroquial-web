import { LogOut } from 'lucide-react';

const Dashboard = () => {
  const handleLogout = () => {
    // En tu implementación real, aquí usarías navigate('/login')
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Título */}
            <h1 className="text-2xl font-bold text-gray-900">
              Dashboard - Clínica Parroquial
            </h1>

            {/* Botón de cerrar sesión */}
            <button
              onClick={handleLogout}
              className="flex items-center space-x-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200"
            >
              <LogOut className="w-4 h-4" />
              <span>Cerrar Sesión</span>
            </button>
          </div>
        </div>
      </header>

      {/* Contenido principal */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800">
          Gestiona las citas médicas
        </h2>
      </main>
    </div>
  );
};

export default Dashboard;