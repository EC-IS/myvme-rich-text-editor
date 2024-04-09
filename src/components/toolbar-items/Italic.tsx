import IconItalic from "../../assets/icons/icon-italic.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const Italic = ({ handleCommand }: ToolbarProps) => {
  return (
    <button
      type="button" 
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Italic"
      onClick={() => handleCommand('italic')}
    >
      <IconItalic />
      <Tooltip text="Italic" />
    </button>
  );
};

export default Italic;
