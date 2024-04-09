import IconTextMarker from "../../assets/icons/icon-marker.svg?react";
import IconArrowDown from "../../assets/icons/icon-arrow-down.svg?react";
import Tooltip from "../Tooltip.tsx";
import { ChangeEvent, useState } from "react";
import styles from './Button.module.scss';

const TextMarker = ({ handleCommand }: ToolbarProps) => {
  const [color, setColor] = useState<string>("#F6D423");

  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setColor(e.target.value);
    handleCommand('hiliteColor', e.target.value);
  }

  return (
    <div className={styles['btn--color']}>
      <div>
        <label htmlFor="text-marker">
          <input id="text-marker" type="color" value={color} onChange={handleColorChange}/>
          <IconTextMarker />
          <IconArrowDown />
        </label>
      </div>

      <Tooltip text="Text marker color" />
    </div>
  );
};

export default TextMarker;
