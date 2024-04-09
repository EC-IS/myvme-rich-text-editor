import IconUnorderedList from "../../assets/icons/icon-unordered-list.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const UnorderedList = ({ handleCommand }: ToolbarProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Unordered list"
      onClick={() => handleCommand('insertUnorderedList')}
    >
      <IconUnorderedList />
      <Tooltip text="Unordered list" />
    </button>
  );
};

export default UnorderedList;
