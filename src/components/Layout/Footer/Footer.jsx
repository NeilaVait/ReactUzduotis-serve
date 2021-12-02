import styles from './Footer.module.css';

function Footer() {
  return (
    <div className={styles.line}>
      <footer className={styles.footer}>
        <p className={styles.logo}>
          <strong>serve </strong>pro
        </p>
        <div className={styles.flex}>
          <ul className={styles.list}>
            <li>
              <a href="">Privatumo politika</a>
            </li>
            <li>
              <a href="">Teisinės nuostatos</a>
            </li>
            <li>
              <a href="">Pagalba ir kontaktai</a>
            </li>
          </ul>
          <button className={styles.lang}>Lietuvių</button>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
