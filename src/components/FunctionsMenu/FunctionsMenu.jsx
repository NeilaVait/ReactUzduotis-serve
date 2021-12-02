import FunctionItem from './FunctionItem/FunctionItem';
import styles from '../FunctionsMenu/FunctionsMenu.module.css';

function FunctionsMenu() {
  return (
    <div className={styles.menu}>
      <FunctionItem />
    </div>
  );
}

export default FunctionsMenu;
