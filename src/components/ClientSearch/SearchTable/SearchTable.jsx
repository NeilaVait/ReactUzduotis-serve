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
      <table className={styles.table}>
        <tr>
          {columns.map((c) => (
            <th>{c}</th>
          ))}
        </tr>
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
            <tr className={styles.client}>
              <td>{c.name}</td>
              <td>{c.surname}</td>
              <td>{c.city}</td>
              <td>{c.cardNo}</td>
              <td>{c.id}</td>
              <td>{c.code}</td>
              <td>{c.birthYear}</td>
              <td>{c.phone1}</td>
              <td>{c.phone2}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

export default SearchTable;
