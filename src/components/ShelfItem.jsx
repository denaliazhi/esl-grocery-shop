/**
 * This component renders the details for an item in shelf view.
 */
import AddItem from "./AddItem";
import NumberPicker from "./NumberPicker";
import RemoveItem from "./RemoveItem";
import { Capitalize } from "../utils";

export default function ShelfItem({ item, handleClick }) {
  return (
    <>
      <div
        className="product shelf-item"
        id={item.id}
        data-section={item.section}
      >
        <img src={`/${item.name.replace(" ", "-")}.png`} alt="" width="100" />
        <p>{Capitalize(item.name)}</p>
        <p>
          ${item.unitPrice.toFixed(2)} / {item.displayUnit}
        </p>
        {item.count === 0 ? (
          <AddItem handleClick={handleClick} />
        ) : (
          <>
            <NumberPicker value={item.count} handleClick={handleClick} />
            <RemoveItem value={item.count} handleClick={handleClick} />
          </>
        )}
      </div>
    </>
  );
}
