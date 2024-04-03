import IconAlignRight from "../../assets/icons/icon-align-right.svg?react";
import Tooltip from "../Tooltip.tsx";

const AlignRight = () => {
  return (
    <button
      type="submit"
      className="btn btn--icon"
      aria-label="Text align right"
    >
      <IconAlignRight />

      <Tooltip text="Text align right" />
    </button>
  );
};

export default AlignRight;
