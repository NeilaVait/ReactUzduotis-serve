import './App.css';
import { Scrollbars } from 'react-custom-scrollbars';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FunctionsPage from './pages/FunctionsPage';
import HomePage from './pages/HomePage';
import ClientContextProvider from './components/contexts/ClientContext';

function App() {
  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgb(15, 3, 83)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const CustomScrollbars = (props) => <Scrollbars renderThumbVertical={renderThumb} {...props} />;

  return (
    <div className="App">
      <CustomScrollbars style={{ height: '100vh' }}>
        <ClientContextProvider>
          <Router>
            <Routes>
              <Route path="/funkcijos" element={<FunctionsPage />} />
              <Route path="/" element={<HomePage />} />
            </Routes>
          </Router>
        </ClientContextProvider>
      </CustomScrollbars>
    </div>
  );
}

export default App;
