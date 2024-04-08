import IconLink from "../../assets/icons/icon-link.svg?react";
import Tooltip from "../Tooltip.tsx";

const Link = ({handleCommand} : ToolbarProps) => {

  const addLink = () => {
    console.log("adding link....");
    const url = prompt("Enter the URL");
    if (url) handleCommand("createLink", url);
  };

  return (
    <button type="submit" className="btn btn--icon" aria-label="link" onClick={() => addLink()}>
      <IconLink />

      <Tooltip text="Link" />
    </button>
  );
};

export default Link;
