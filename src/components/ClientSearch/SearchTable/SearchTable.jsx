import styles from './SearchTable.module.css';
import { useState } from 'react';

function SearchTable() {
  const columns = [
    'Vardas',
    'Pavardė',
    'Miestas',
    'Kortelės NR',
    'Kliento ID',
    'Asmens kodas',
    'Gimęs',
    'Telefono Nr1',
    'Telefono Nr.2',
  ];

  const clients = [
    {
      name: 'Vardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
    {
      name: 'Bardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
    {
      name: 'Vardenis',
      surname: 'Pavardenis',
      city: 'Kaunas',
      cardNo: '21 V0001',
      id: '00000',
      code: '00000',
      birthYear: '1974',
      phone1: '+370 000 00000',
      phone2: '+370 000 00000',
    },
  ];

  const [searchValue, setSearchValue] = useState('');
  const [clientOpen, setClientOpen] = useState(false);

  const handleOpenClient = (name) => {
    setClientOpen(true);
  };

  return (
    <div className={styles.searchTable}>
      <button className={styles.clean}>Valyti</button>
      <input
        value={searchValue}
        onChange={(e) => {
          setSearchValue(e.target.value);
        }}
        type="text"
        placeholder="Kliento paieška"
        className={styles.searchBar}
      />
      <div className={styles.table}>
        <div className={styles.headers}>
          {columns.map((c) => (
            <div className={styles.header}>{c}</div>
          ))}
        </div>
        <div className={styles.clientContainer}>
          {clients
            .filter((val) => {
              if (searchValue === '') {
                return val;
              }
              if (val.name.toLowerCase().includes(searchValue.toLowerCase())) {
                return val;
              }
            })
            .map((c) => (
              <div className={styles.clientRow} onClick={handleOpenClient}>
                <div className={styles.client}>{c.name}</div>
                <div className={styles.client}>{c.surname}</div>
                <div className={styles.client}>{c.city}</div>
                <div className={styles.client}>{c.cardNo}</div>
                <div className={styles.client}>{c.id}</div>
                <div className={styles.client}>{c.code}</div>
                <div className={styles.client}>{c.birthYear}</div>
                <div className={styles.client}>{c.phone1}</div>
                <div className={styles.client}>{c.phone2}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default SearchTable;
