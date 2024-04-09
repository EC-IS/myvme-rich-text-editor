import IconAlignCenter from "../../assets/icons/icon-align-center.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss'; 

const AlignCenter = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="button" 
      className={`${styles.btn} ${styles['btn--icon']}`} 
      aria-label="Text align center"
      onClick={() => handleCommand('justifyCenter')}
    >
      <IconAlignCenter />
      <Tooltip text="Text align center" />
    </button>
  );
};

export default AlignCenter;

