import Layout from './../components/Layout/Layout';
import Aside from './../components/Aside/Aside';
import FunctionsMenu from './../components/FunctionsMenu/FunctionsMenu';
import ClientSearch from './../components/ClientSearch/ClientSearch';
import Footer from '../components/Layout/Footer/Footer';

function FunctionsPage() {
  return (
    <Layout functionsPage>
      <div className="asideFlex">
        <Aside />
        <main className="main">
          <FunctionsMenu />
          <ClientSearch />
          <Footer />
        </main>
      </div>
    </Layout>
  );
}

export default FunctionsPage;
