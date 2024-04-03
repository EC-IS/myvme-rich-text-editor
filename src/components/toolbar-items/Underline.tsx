import IconUnderline from "../../assets/icons/icon-underline.svg?react";
import Tooltip from "../Tooltip.tsx";

const Underline = () => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Underline">
      <IconUnderline />

      <Tooltip text="Underline" />
    </button>
  );
};

export default Underline;
