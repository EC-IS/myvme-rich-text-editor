import IconAlignCenter from "../../assets/icons/icon-align-center.svg?react";
import Tooltip from "../Tooltip.tsx";

const AlignCenter = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="submit"
      className="btn btn--icon"
      aria-label="Text align center"
      onClick={() => handleCommand('justifyCenter')}
    >
      <IconAlignCenter />

      <Tooltip text="Text align center" />
    </button>
  );
};

export default AlignCenter;
