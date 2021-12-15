import { useContext } from 'react';
import styles from './SearchData.module.css';
import { ClientContext } from './../../contexts/ClientContext';
import FunctionItem from './../../FunctionsMenu/FunctionItem/FunctionItem';

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

  const clientDataConditional = () => {
    if (context.openClient.length === 1) {
      return (
        <div className={styles.clientData}>
          <h2>
            {context.openClient[0].name} {context.openClient[0].surname}
          </h2>
          <div className={styles.flex}>
            <div className={styles.info}>
              <h4>Svarbi informacija</h4>

              <div className={styles.window}>
                <p>
                  Neatvyko po užsakymo patvirtinimo: <span className={styles.count}>0</span> kartai
                </p>
                <div className={styles.infoIcons}>
                  <FunctionItem info />
                  <FunctionItem info />
                </div>
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
      );
    } else {
      return null;
    }
  };

  return <div className={styles.container}>{clientDataConditional()}</div>;
}

export default SearchData;
