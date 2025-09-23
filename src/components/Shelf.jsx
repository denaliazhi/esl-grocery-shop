/**
 * This component renders products for the selected section
 * of the grocery store.
 */

import { useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Shelf() {
  const { grocerySection, allProducts, updateCount } = useOutletContext();
  return (
    <>
      {grocerySection ? (
        <div className="shelf">
          {allProducts[grocerySection].map((item) => (
            <ShelfItem key={item.id} item={item} handleClick={updateCount} />
          ))}
        </div>
      ) : null}
    </>
  );
}
