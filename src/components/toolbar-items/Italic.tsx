import IconItalic from "../../assets/icons/icon-italic.svg?react";
import Tooltip from "../Tooltip.tsx";

const Italic = () => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Italic">
      <IconItalic />

      <Tooltip text="Italic" />
    </button>
  );
};

export default Italic;
