import styles from './Header.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.flex}>
        <p className={styles.logo}>
          <strong>serve </strong>pro
        </p>
        <menu className={styles.menu}>
          <li className={styles.menuItem}>
            <Link to="/funkcijos" style={{ textDecoration: 'none', color: 'white' }}>
              Funkcijos
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Ataskaitos
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Sandėlys
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Nustatymai
            </Link>
          </li>
          <li className={styles.menuItem}>
            <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
              Atsijungti
            </Link>
          </li>
        </menu>
      </div>
    </header>
  );
}

export default Header;
