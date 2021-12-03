import styles from './ClientSearch.module.css';
import SearchTable from './SearchTable/SearchTable';
import SearchData from './SearchData/SearchData';
import { useState } from 'react';

function ClientSearch() {
  return (
    <div className={styles.window}>
      <h2>Kliento paieška</h2>
      <SearchTable />
      <SearchData />
    </div>
  );
}

export default ClientSearch;
