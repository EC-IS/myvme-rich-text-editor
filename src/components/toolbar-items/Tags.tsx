import { useState } from "react";

import CustomSelect from "../CustomSelect.tsx";

const Tags = () => {
  const tagsList = [
    "Building name",
    "Building address",
    "First name",
    "Last name",
  ];

  const [selectedValue, setSelectedValue] = useState(tagsList[0]);

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
