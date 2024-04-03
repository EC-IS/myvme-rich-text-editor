import { useState } from "react";

import CustomSelect from "../CustomSelect.tsx";

const FontSize = () => {
  const fontSizeList = ["Normal", "Heading 1", "Heading 2"];

  const [selectedValue, setSelectedValue] = useState(fontSizeList[0]);

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
