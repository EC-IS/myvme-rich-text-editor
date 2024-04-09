import { useEffect, useRef, useState } from "react";

import IconArrowDown from "../assets/icons/icon-arrow-down.svg?react";

const CustomSelect = ({
  listItems,
  selectedValue,
  setSelectedValue,
  buttonText,
  type, // used for the radio buttons name, so they can be grouped
}: {
  listItems: any[];
  selectedValue: any;
  setSelectedValue: Function;
  buttonText?: string;
  type: string;
}) => {
  const customSelectRef = useRef<HTMLDivElement | null>(null);

  const [isToggled, setIsToggled] = useState(false);
  const toggleDropdown = () => setIsToggled(!isToggled);

  const handleChange = (e: any) => {
    e.preventDefault();

    toggleDropdown();
    return setSelectedValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Asserting event.target as Node
      const target = event.target as Node;
  
      if (customSelectRef.current && !customSelectRef.current.contains(target)) {
        setIsToggled(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
  
    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="custom-select" ref={customSelectRef}>
      <button
        type="submit"
        className="custom-select__btn | btn"
        aria-expanded={isToggled}
        aria-controls={`custom-select-list-${type}`}
        aria-label="toggle dropdown"
        onClick={toggleDropdown}
      >
        {buttonText ? buttonText : selectedValue} <IconArrowDown />
      </button>
      <ul
        id={`custom-select-list-${type}`}
        className={`custom-select__list ${isToggled ? "open" : ""}`}
      >
        {listItems.map((item: string, index: number) => (
          <li
            key={index}
            className={`custom-select__item ${item === selectedValue ? "selected" : ""}`}
          >
            <label
              htmlFor={`custom-select-${type}-radio-${index}`}
              className=""
            >
              <input
                type="radio"
                id={`custom-select-${type}-radio-${index}`}
                name={`custom-select-${type}`}
                value={item}
                checked={item === selectedValue}
                onChange={handleChange}
              />
              <p>{item}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomSelect;
