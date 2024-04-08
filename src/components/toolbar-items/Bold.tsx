import IconBold from "../../assets/icons/icon-bold.svg?react";
import Tooltip from "../Tooltip.tsx";

const Bold = ({handleCommand}: ToolbarProps) => {
  return (
    <button type="submit" className="btn btn--icon selected" aria-label="Bold" onClick={() => handleCommand('bold')}>
      <IconBold />

      <Tooltip text="Bold" />
    </button>
  );
};

export default Bold;
