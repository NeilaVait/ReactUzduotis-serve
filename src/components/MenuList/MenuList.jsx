import styles from './MenuList.module.css';

function MenuList({ dayFunctions, cards }) {
  const listItems = dayFunctions ? dayFunctions : cards;

  return (
    <div className={styles.menu}>
      {dayFunctions ? <h3>Dienos funkcijos</h3> : <h3>Kortelės</h3>}

      <ul className={styles.list}>
        {listItems.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </div>
  );
}

export default MenuList;
