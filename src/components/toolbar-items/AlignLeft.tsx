import IconAlignLeft from "../../assets/icons/icon-align-left.svg?react";
import Tooltip from "../Tooltip.tsx";

const AlignLeft = () => {
  return (
    <button
      type="submit"
      className="btn btn--icon"
      aria-label="Text align left"
    >
      <IconAlignLeft />

      <Tooltip text="Text align left" />
    </button>
  );
};

export default AlignLeft;
