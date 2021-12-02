import MenuList from './../MenuList/MenuList';
import styles from './Aside.module.css';

function Aside() {
  const dayFunctions = ['Registracija', 'Kliento paieška', 'Sąskaitos', 'Kasa', 'Orderiai', 'Medžiagų išdavimas'];
  const cards = ['Fiziniai klientai', 'Juridiniai klientai', 'Prekių tiekėjai', 'Paslaugos', 'Prekės', 'Darbuotojai'];

  return (
    <aside className={styles.aside}>
      <MenuList dayFunctions={dayFunctions} />
      <div className={styles.line}></div>
      <MenuList cards={cards} />
    </aside>
  );
}

export default Aside;
