import { useEffect, useRef, useState } from "react";
import IconArrowDown from "../assets/icons/icon-arrow-down.svg?react";
import styles from './CustomSelect.module.scss';
import buttonStyles from './toolbar-items/Button.module.scss';

const CustomSelect = ({
  listItems,
  selectedValue,
  setSelectedValue,
  buttonText,
  type,
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
    setSelectedValue(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (customSelectRef.current && !customSelectRef.current.contains(target)) {
        setIsToggled(false);
      }
    };
  
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className={styles['custom-select']} ref={customSelectRef}>
      <button
        type="button"
        className={`${styles['custom-select__btn']} ${buttonStyles.btn}`}
        aria-expanded={isToggled}
        aria-controls={`custom-select-list-${type}`}
        aria-label="toggle dropdown"
        onClick={toggleDropdown}
      >
        {buttonText ? buttonText : selectedValue} <IconArrowDown />
      </button>
      <ul
        id={`custom-select-list-${type}`}
        className={`${styles['custom-select__list']} ${isToggled ? styles.open : ""}`}
      >
        {listItems.map((item: string, index: number) => (
          <li
            key={index}
            className={`${styles['custom-select__item']} ${item === selectedValue ? styles.selected : ""}`}
          >
            <label htmlFor={`custom-select-${type}-radio-${index}`}>
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
