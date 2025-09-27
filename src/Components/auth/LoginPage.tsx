import { Eye, Mail, Lock, User, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-600 to-indigo-900 flex items-center justify-center p-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400/15 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-300/25 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-300/10 rounded-full blur-lg animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 bg-indigo-200/20 rounded-full blur-lg animate-pulse delay-700"></div>
      </div>

      {/* Main login container */}
      <div className="relative z-10 w-full max-w-md">
        {/* Header with logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-4 shadow-2xl border border-blue-300/30">
            <Shield className="w-10 h-10 text-blue-100" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2 drop-shadow-lg">Clínica Parroquial</h1>
          <h2 className="text-2xl font-semibold text-blue-100 mb-1">Nuestra Señora de la Merced</h2>
          <p className="text-blue-200">Sistema de Gestión Médica</p>
        </div>

        {/* Login form */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-blue-200/30 ring-1 ring-blue-100/20">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Iniciar Sesión</h2>
            <p className="text-blue-700">Accede a tu panel de control</p>
          </div>

          <div className="space-y-6">
            {/* Email field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-800">
                Correo Electrónico
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full pl-10 pr-4 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-50/50 transition-colors"
                />
              </div>
            </div>

            {/* Password field */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-blue-800">
                Contraseña
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-blue-500" />
                </div>
                <input
                  type="password"
                  placeholder="Tu contraseña"
                  className="w-full pl-10 pr-12 py-3 border border-blue-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:bg-blue-50/50 transition-colors"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  <Eye className="h-5 w-5 text-blue-500 hover:text-blue-700" />
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="rounded border-blue-300 text-blue-600 shadow-sm focus:ring-blue-500"
                />
                <span className="ml-2 text-sm text-blue-700">Recordarme</span>
              </label>
              <button
                type="button"
                className="text-sm text-blue-700 hover:text-blue-900 font-medium transition-colors"
              >
                ¿Olvidaste tu contraseña?
              </button>
            </div>

            {/* Submit button */}
            <div 
              onClick={handleLogin}
              className="w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-200 cursor-pointer text-center bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Iniciar Sesión
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-blue-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-blue-600">O continúa con</span>
            </div>
          </div>

          {/* Social login buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-lg shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center px-4 py-2 border border-blue-300 rounded-lg shadow-sm bg-white text-sm font-medium text-blue-600 hover:bg-blue-50 transition-colors">
              <User className="w-5 h-5 mr-2" />
              Registro
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-blue-700">
            ¿No tienes una cuenta?{' '}
            <button className="text-blue-800 hover:text-blue-900 font-medium transition-colors">
              Regístrate aquí
            </button>
          </div>
        </div>

        {/* Security notice */}
        <div className="mt-6 text-center">
          <p className="text-blue-100 text-sm flex items-center justify-center mb-3">
            <Shield className="w-4 h-4 mr-1" />
            Conexión segura y encriptada
          </p>
        </div>

        {/* Copyright */}
        <div className="mt-4 text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-blue-300/20">
            <p className="text-blue-100 text-xs font-medium">
              © 2024 Todos los derechos reservados
            </p>
            <p className="text-blue-200 text-sm font-semibold mt-1">
              Clínica Parroquial Nuestra Señora de la Merced
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;