import styles from "./toolbar-items/Button.module.scss";

const Tooltip = ({ text }: { text: string }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles['tooltip__text']}>{text}</span>
    </div>
  );
};

export default Tooltip;