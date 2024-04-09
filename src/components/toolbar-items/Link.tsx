import IconLink from "../../assets/icons/icon-link.svg?react";
import Tooltip from "../Tooltip.tsx";
import styles from './Button.module.scss';

const Link = ({ handleCommand }: ToolbarProps) => {

  const addLink = () => {
    console.log("Adding link...");
    const url = prompt("Enter the URL");
    if (url) handleCommand("createLink", url);
  };

  return (
    <button
      type="button"
      className={`${styles.btn} ${styles['btn--icon']}`}
      aria-label="Link"
      onClick={addLink}
    >
      <IconLink />
      <Tooltip text="Link" />
    </button>
  );
};

export default Link;
