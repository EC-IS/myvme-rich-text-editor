import IconBold from "../../assets/icons/icon-bold.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const Bold = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="button"
      // className={`${styles.btn} ${styles['btn--icon']} ${styles.selected}`}
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Bold"
      onClick={() => handleCommand('bold')}
    >
      <IconBold />
      <Tooltip text="Bold" />
    </button>
  );
};

export default Bold;