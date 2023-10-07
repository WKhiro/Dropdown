import "./Dropdown.css";
import { useState } from "react";
import ChevronDown from "./assets/chevron-down-solid.svg";
import ChevronUp from "./assets/chevron-up-solid.svg";

interface Props {
  items: string[];
  multiSelect: boolean;
}

export function Dropdown({ items, multiSelect = false }: Props) {
  let itemsx = [...items];
  if (multiSelect) {
    itemsx = ["All", "None", ...items];
  }
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectItems] = useState<string[]>([]);

  function handleOnClick(item: string) {
    if (!selectedItems.some((element) => element == item)) {
      if (!multiSelect) {
        setSelectItems([item]);
      } else if (multiSelect) {
        if (item === "All") {
          setSelectItems([...items]);
        } else if (item === "None") {
          setSelectItems([item]);
        } else {
          setSelectItems([
            ...selectedItems.filter((element) => element !== "None"),
            item,
          ]);
        }
      }
    } else {
      let filteredItems = selectedItems;
      filteredItems = filteredItems.filter((element) => element !== item);
      setSelectItems([...filteredItems]);
    }
  }

  return (
    <>
      <div className="dropdownWrapper">
        <button className="dropdown" onClick={() => setIsOpen(!isOpen)}>
          <div className="dropdownText">
            {selectedItems.length > 0 ? selectedItems.join(", ") : "Select"}
          </div>
          {!isOpen ? <img src={ChevronDown} /> : <img src={ChevronUp} />}
        </button>
        {isOpen && itemsx != null && (
          <div className="itemsWrapper">
            {itemsx.map((item) => (
              <div
                key={item}
                className={selectedItems.includes(item) ? "selected" : "item"}
                onClick={() => (!multiSelect ? handleOnClick(item) : null)}
              >
                {multiSelect ? (
                  <>
                    <input
                      onChange={() => handleOnClick(item)}
                      checked={selectedItems.includes(item)}
                      id={`input-${item}`}
                      type="checkbox"
                    />
                    <label htmlFor={`input-${item}`}>{item}</label>
                  </>
                ) : (
                  <div>{item}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
