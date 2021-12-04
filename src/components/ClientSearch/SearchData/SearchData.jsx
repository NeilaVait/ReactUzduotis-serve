import { useContext } from 'react';
import styles from './SearchData.module.css';
import { ClientContext } from './../../contexts/ClientContext';

function SearchData() {
  const context = useContext(ClientContext);

  const cardMenu = [
    'Bendra informacija',
    'Užsakymai',
    'Gydytojo įrašai',
    'Gydymo planai',
    'Nuotraukos',
    'Receptai',
    'Injekcijos',
    'TLK',
    'Svarbi informacija',
    'SMS nustatymai',
  ];

  // cia noriu conditional rodyt tik jei paspausta ant client
  // reikia contexto

  return (
    <div className={styles.container}>
      {context.clientOpen && (
        <div className={styles.clientData}>
          <h2>Vardenis Pavardenis</h2>
          <div className={styles.flex}>
            <div className={styles.info}>
              <h4>Svarbi informacija</h4>
              <div className={styles.window}>
                <p>
                  Neatvyko po užsakymo patvirtinimo: <span className={styles.count}>0</span> kartai
                </p>
              </div>
            </div>
            <div className={styles.menu}>
              <h4>Kortelė</h4>
              <div className={styles.listContainer}>
                <ul className={styles.list}>
                  {cardMenu.map((m) => (
                    <li>{m}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchData;
