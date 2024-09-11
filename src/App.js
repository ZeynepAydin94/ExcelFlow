import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Login sayfasını içeri aktar

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />  {/* Login sayfası ana yol */}
          <Route path="/dashboard" element={<h2>Dashboard - Welcome!</h2>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;