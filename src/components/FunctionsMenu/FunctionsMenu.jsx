import FunctionItem from './FunctionItem/FunctionItem';
import styles from '../FunctionsMenu/FunctionsMenu.module.css';
import logo1 from '../../assets/Сгруппировать 568.svg';
import logo2 from '../../assets/Сгруппировать 569.svg';
import logo3 from '../../assets/Сгруппировать 738.svg';
import logo4 from '../../assets/Сгруппировать 739.svg';
import logo5 from '../../assets/Сгруппировать 540.svg';
import logo6 from '../../assets/Сгруппировать 531.svg';

function FunctionsMenu() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6];

  return (
    <div className={styles.menu}>
      {logos.map((l) => (
        <FunctionItem logo={l} />
      ))}
    </div>
  );
}

export default FunctionsMenu;
