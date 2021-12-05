import styles from './FunctionItem.module.css';
import infoIcon from '../../../assets/Info.svg';

function FunctionItem({ logo, info }) {
  return (
    <div className={styles.logo}>
      <img src={info ? infoIcon : logo} alt="" />
    </div>
  );
}

export default FunctionItem;
