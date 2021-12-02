import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <p className={styles.logo}>
          <strong>serve </strong>pro
        </p>
        <menu className={styles.menu}>
          <li>Funkcijos</li>
          <li>Ataskaitos</li>
          <li>Sandėlys</li>
          <li>Nustatymai</li>
          <li>Atsijungti</li>
        </menu>
      </div>
    </header>
  );
}

export default Header;
