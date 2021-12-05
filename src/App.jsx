import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunctionsPage from './pages/FunctionsPage';
import HomePage from './pages/HomePage';
import ClientContextProvider from './components/contexts/ClientContext';

function App() {
  return (
    <div className="App">
      <Scrollbars style={{ height: 700 }}>
        <div className="scrollhost">
          <ClientContextProvider>
            <Router>
              <Routes>
                <Route path="/funkcijos" element={<FunctionsPage />} />
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Router>
          </ClientContextProvider>
        </div>
      </Scrollbars>
    </div>
  );
}

export default App;
