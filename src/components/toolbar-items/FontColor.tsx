import IconFontColor from "../../assets/icons/icon-font-color.svg?react";
import IconArrowDown from "../../assets/icons/icon-arrow-down.svg?react";
import Tooltip from "../Tooltip.tsx";
import { ChangeEvent, useState } from "react";

const FontColor = ({handleCommand}: ToolbarProps) => {

  const [color, setColor] = useState<string>("#3C4D5D");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setColor(e.target.value);
    handleCommand('foreColor', e.target.value)
  }

  return (
    <div className="btn--color">
      <div>
        <label htmlFor="font-color">
          <input id="font-color" type="color" value={color} onChange={handleColorChange}/>
          <IconFontColor />
          <IconArrowDown />
        </label>
      </div>

      <Tooltip text="Text color" />
    </div>
  );
};

export default FontColor;
