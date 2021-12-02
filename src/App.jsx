import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunctionsPage from './pages/FunctionsPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/funkcijos" element={<FunctionsPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
