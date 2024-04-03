import IconOrderedList from "../../assets/icons/icon-ordered-list.svg?react";
import Tooltip from "../Tooltip.tsx";

const OrderedList = () => {
  return (
    <button type="submit" className="btn btn--icon" aria-label="Ordered list">
      <IconOrderedList />

      <Tooltip text="Ordered list" />
    </button>
  );
};

export default OrderedList;
