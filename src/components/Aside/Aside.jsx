import MenuList from './../MenuList/MenuList';
import styles from './Aside.module.css';
import { Scrollbars } from 'react-custom-scrollbars';

function Aside() {
  const dayFunctions = ['Registracija', 'Kliento paieška', 'Sąskaitos', 'Kasa', 'Orderiai', 'Medžiagų išdavimas'];
  const cards = ['Fiziniai klientai', 'Juridiniai klientai', 'Prekių tiekėjai', 'Paslaugos', 'Prekės', 'Darbuotojai'];

  const renderThumb = ({ style, ...props }) => {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: 'rgb(15, 3, 83)',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const CustomScrollbars = (props) => <Scrollbars renderThumbVertical={renderThumb} {...props} />;

  return (
    <aside className={styles.aside}>
      <CustomScrollbars>
        <MenuList dayFunctions={dayFunctions} />
        <div className={styles.line}></div>
        <MenuList cards={cards} />
      </CustomScrollbars>
    </aside>
  );
}

export default Aside;
