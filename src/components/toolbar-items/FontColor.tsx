import IconFontColor from "../../assets/icons/icon-font-color.svg?react";
import IconArrowDown from "../../assets/icons/icon-arrow-down.svg?react";
import Tooltip from "../Tooltip.tsx";

const FontColor = () => {
  return (
    <div className="btn--color">
      <div>
        <label htmlFor="font-color">
          <input id="font-color" type="color" value="#3C4D5D" />
          <IconFontColor />
          <IconArrowDown />
        </label>
      </div>

      <Tooltip text="Text color" />
    </div>
  );
};

export default FontColor;
