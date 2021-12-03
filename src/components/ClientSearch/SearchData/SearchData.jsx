import styles from './SearchData.module.css';

function SearchData() {
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

  return (
    <div className={styles.container}>
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
  );
}

export default SearchData;
