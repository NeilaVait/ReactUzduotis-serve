import styles from './FunctionItem.module.css';
import infoIcon from '../../../assets/Info.svg';

function FunctionItem({ logo, info }) {
  return (
    <div className={styles.logo}>
      <div className={styles.tooltip}>
        <img src={info ? infoIcon : logo} alt="" />
        <span className={styles.tooltipText}>Tooltip text</span>
      </div>
    </div>
  );
}

export default FunctionItem;
