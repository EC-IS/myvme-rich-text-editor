import IconUnderline from "../../assets/icons/icon-underline.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const Underline = ({ handleCommand }: ToolbarProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Underline"
      onClick={() => handleCommand('underline')}
    >
      <IconUnderline />
      <Tooltip text="Underline" />
    </button>
  );
};

export default Underline;
