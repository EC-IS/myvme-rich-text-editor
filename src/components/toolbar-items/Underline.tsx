import IconUnderline from "../../assets/icons/icon-underline.svg?react";
import Tooltip from "../Tooltip.tsx";

const Underline = ({handleCommand}: ToolbarProps) => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Underline" onClick={() => handleCommand('underline')}>
      <IconUnderline />

      <Tooltip text="Underline" />
    </button>
  );
};

export default Underline;
