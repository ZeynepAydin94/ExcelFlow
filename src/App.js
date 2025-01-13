import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Login sayfasını içeri aktar
import Dashboard from './pages/Dashboard';
import MasterLayout from './layouts/MasterLayout'; // MasterLayout sayfasını içeri aktar
import DataImport from './pages/DataImport'; // DataImport sayfasını içeri aktar
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS dosyasını içeri aktar
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />  {/* Login sayfası ana yol */}
          <Route path="/" element={<MasterLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="dataimport" element={<DataImport />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;