import { useEffect, useState } from "react";

import CustomSelect from "../CustomSelect.tsx";

const Tags = ({handleCommand}: ToolbarProps) => {
  const tagsList = [
    "Building name",
    "Building address",
    "First name",
    "Last name",
  ];

  const [selectedValue, setSelectedValue] = useState(tagsList[0]);

  useEffect(() => {
    handleCommand('');    
  }, [selectedValue]);


  return (
    <CustomSelect
      listItems={tagsList}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
      buttonText="Tags"
      type="tags"
    />
  );
};

export default Tags;
