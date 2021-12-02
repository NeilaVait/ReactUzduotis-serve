import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';

function Layout({ functionsPage, children }) {
  return (
    <>
      <Header />
      {children}
      {functionsPage ? null : <Footer />}
    </>
  );
}

export default Layout;
