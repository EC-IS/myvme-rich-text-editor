import IconTextMarker from "../../assets/icons/icon-marker.svg?react";
import IconArrowDown from "../../assets/icons/icon-arrow-down.svg?react";
import Tooltip from "../Tooltip.tsx";

const TextMarker = () => {
  return (
    <div className="btn--color">
      <div>
        <label htmlFor="text-marker">
          <input id="text-marker" type="color" value="#F6D423" />
          <IconTextMarker />
          <IconArrowDown />
        </label>
      </div>

      <Tooltip text="Text marker color" />
    </div>
  );
};

export default TextMarker;
