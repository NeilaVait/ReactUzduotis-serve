import styles from './ClientSearch.module.css';
import SearchTable from './SearchTable/SearchTable';

function ClientSearch() {
  return (
    <div className={styles.window}>
      <h2>Kliento paieška</h2>
      <SearchTable />
    </div>
  );
}

export default ClientSearch;
