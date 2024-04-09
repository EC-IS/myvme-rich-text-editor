import IconOrderedList from "../../assets/icons/icon-ordered-list.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const OrderedList = ({ handleCommand }: ToolbarProps) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Ordered list"
      onClick={() => handleCommand('insertOrderedList')}
    >
      <IconOrderedList />
      <Tooltip text="Ordered list" />
    </button>
  );
};

export default OrderedList;
