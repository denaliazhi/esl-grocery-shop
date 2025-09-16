/**
 * This component renders products for the selected section
 * of the grocery store.
 */

import { useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Shelf() {
  const [section, items, setCount] = useOutletContext();
  return (
    <>
      {section ? (
        <div className="shelf">
          {items[section].map((item) => (
            <ShelfItem item={item} key={item.id} handleClick={setCount} />
          ))}
        </div>
      ) : null}
    </>
  );
}
