import { useState } from "react";
import styles from "./ListGroup.module.css";
import { RiMapPinLine } from "react-icons/ri"; 

interface Props {
  heading?: string;
  items: string[];
  onSelectItem: (item: string) => void;
}

function ListGroup({ heading = "Heading", items, onSelectItem }: Props) {
  // State Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    //implicity fragment ~ import { Fragment } from "react";
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No items found!</p>}

      <ul className={[styles.listGroup, styles.container].join(" ")}>
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? styles.listGroupItemActive
                : styles.listGroupItem
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            <RiMapPinLine color="red" size="18" />
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
