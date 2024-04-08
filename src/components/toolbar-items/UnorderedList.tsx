import IconUnorderedList from "../../assets/icons/icon-unordered-list.svg?react";
import Tooltip from "../Tooltip.tsx";

const UnorderedList = ({handleCommand}: ToolbarProps) => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Unordered list" onClick={() => handleCommand('insertUnorderedList')}>
      <IconUnorderedList />

      <Tooltip text="Unordered list" />
    </button>
  );
};

export default UnorderedList;
