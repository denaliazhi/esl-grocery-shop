import { useOutletContext } from "react-router";
import Product from "./Product";

export default function Shelf() {
  const [section, items, changeCount] = useOutletContext();
  return (
    <>
      {section ? (
        <div className="product-shelf">
          {items[section].map((item) => (
            <Product item={item} key={item.id} handleClick={changeCount} />
          ))}
        </div>
      ) : null}
    </>
  );
}
