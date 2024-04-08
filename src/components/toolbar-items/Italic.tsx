import IconItalic from "../../assets/icons/icon-italic.svg?react";
import Tooltip from "../Tooltip.tsx";

const Italic = ({handleCommand}: ToolbarProps) => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Italic" onClick={() => handleCommand('italic')}>
      <IconItalic />

      <Tooltip text="Italic" />
    </button>
  );
};

export default Italic;
