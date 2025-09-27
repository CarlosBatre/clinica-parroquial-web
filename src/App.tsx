import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import LoginPage from './Components/auth/LoginPage';
import Dashboard from './Components/dashboard';

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta por defecto redirige al login */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        
        {/* Ruta del login */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Ruta del dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Ruta 404 - cualquier otra ruta redirige al login */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;