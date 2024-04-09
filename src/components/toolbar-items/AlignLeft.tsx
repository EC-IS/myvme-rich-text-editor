import IconAlignLeft from "../../assets/icons/icon-align-left.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const AlignLeft = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Text align left"
      onClick={() => handleCommand('justifyLeft')}
    >
      <IconAlignLeft />
      <Tooltip text="Text align left" />
    </button>
  );
};

export default AlignLeft;
