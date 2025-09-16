/**
 * This component renders products for the selected section
 * of the grocery store.
 */

import { useOutletContext } from "react-router";
import Product from "./Product";

export default function Shelf() {
  const [section, items, setCount] = useOutletContext();
  return (
    <>
      {section ? (
        <div className="product-shelf">
          {items[section].map((item) => (
            <Product item={item} key={item.id} handleClick={setCount} />
          ))}
        </div>
      ) : null}
    </>
  );
}
