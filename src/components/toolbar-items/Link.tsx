import IconLink from "../../assets/icons/icon-link.svg?react";
import Tooltip from "../Tooltip.tsx";

const Link = () => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="link">
      <IconLink />

      <Tooltip text="Link" />
    </button>
  );
};

export default Link;
