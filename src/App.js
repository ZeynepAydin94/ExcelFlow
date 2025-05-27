import { BrowserRouter as Router, Route, Navigate, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Login sayfasını içeri aktar
import Dashboard from './pages/Dashboard';
import MasterLayout from './layouts/MasterLayout'; // MasterLayout sayfasını içeri aktar
import DataImport from './pages/DataImport'; // DataImport sayfasını içeri aktar
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını içeri aktar
import ProtectedRoute from './components/ProtectedRoute';
import { ModalProvider } from './components/modal/ModalProvider'; // ModalProvider'ı içeri aktar
function App() {
  return (
    <ModalProvider>
      <Router>
        <Routes>
          {/* Herkese açık login sayfası */}
          <Route path="/login" element={<Login />} />

          {/* Tüm korumalı sayfalar MasterLayout altında */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MasterLayout />
              </ProtectedRoute>
            }
          >
            {/* İçerik sayfaları */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dataimport" element={<DataImport />} />
          </Route>

          {/* Geçersiz path'ler için yönlendirme */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
    </ModalProvider>
  );
}

export default App;