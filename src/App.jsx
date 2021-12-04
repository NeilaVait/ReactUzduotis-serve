import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunctionsPage from './pages/FunctionsPage';
import HomePage from './pages/HomePage';
import ClientContextProvider from './components/contexts/ClientContext';

function App() {
  return (
    <div className="App">
      <ClientContextProvider>
        <Router>
          <Routes>
            <Route path="/funkcijos" element={<FunctionsPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </ClientContextProvider>
    </div>
  );
}

export default App;
