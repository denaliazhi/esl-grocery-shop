/**
 * This component renders products for the selected activeSection
 * of the grocery store.
 */

import { useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Shelf() {
  const { activeSection, products, updateCount, setLine } = useOutletContext();
  return (
    <>
      {activeSection ? (
        <div className="shelf">
          {products[activeSection].map((item) => (
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
