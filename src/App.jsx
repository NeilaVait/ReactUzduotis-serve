import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Aside from './components/Aside/Aside';
import FunctionsMenu from './components/FunctionsMenu/FunctionsMenu';
import ClientSearch from './components/ClientSearch/ClientSearch';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-flex">
        <Aside />
        <main>
          <FunctionsMenu />
          <ClientSearch />
          <Footer />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
