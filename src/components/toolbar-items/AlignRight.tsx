import IconAlignRight from "../../assets/icons/icon-align-right.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const AlignRight = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`} 
      aria-label="Text align right"
      onClick={() => handleCommand('justifyRight')}
    >
      <IconAlignRight />
      <Tooltip text="Text align right" />
    </button>
  );
};

export default AlignRight;
