import { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect.tsx";

const FontSize = ({ handleCommand }: ToolbarProps) => {
  const fontSizeList = ["Normal", "Heading 1", "Heading 2"];

  const [selectedValue, setSelectedValue] = useState(fontSizeList[0]);

  useEffect(() => {
    switch (selectedValue) {
      case "Heading 1":
        handleCommand('formatBlock', '<h1>');
        break;
      case "Heading 2":
        handleCommand('formatBlock', '<h2>');
        break;
      default:
        break;
        // handleCommand('formatBlock', '<p>');
    }
  }, [selectedValue, handleCommand]);

  return (
    <CustomSelect
      listItems={fontSizeList}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      type="font-size"
    />
  );
};

export default FontSize;
