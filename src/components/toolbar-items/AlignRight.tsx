import IconAlignRight from "../../assets/icons/icon-align-right.svg?react";
import Tooltip from "../Tooltip.tsx";

const AlignRight = ({handleCommand}: ToolbarProps) => {
  return (
    <button
      type="submit"
      className="btn btn--icon"
      aria-label="Text align right"
      onClick={() => handleCommand('justifyRight')}
    >
      <IconAlignRight />

      <Tooltip text="Text align right" />
    </button>
  );
};

export default AlignRight;
