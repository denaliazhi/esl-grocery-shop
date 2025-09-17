/**
 * This component renders products for the selected section
 * of the grocery store.
 */

import { useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Shelf() {
  const [section, items, updateCount, , setLine] = useOutletContext();
  return (
    <>
      {section ? (
        <div className="shelf">
          {items[section].map((item) => (
            <ShelfItem
              key={item.id}
              item={item}
              handleClick={updateCount}
              read={setLine}
            />
          ))}
        </div>
      ) : null}
    </>
  );
}
