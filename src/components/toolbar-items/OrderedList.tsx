import IconOrderedList from "../../assets/icons/icon-ordered-list.svg?react";
import Tooltip from "../Tooltip.tsx";

const OrderedList = ({handleCommand}: ToolbarProps) => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Ordered list" onClick={() => handleCommand('insertOrderedList')}>
      <IconOrderedList />

      <Tooltip text="Ordered list" />
    </button>
  );
};

export default OrderedList;
