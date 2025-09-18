/**
 * This component renders the details for an item in shelf view.
 */
import AddItem from "./AddItem";
import NumberPicker from "./NumberPicker";
import { capitalize, isPlural, getImagePath } from "../utils";

export default function ShelfItem({ item, handleClick, read }) {
  // function handleHover() {
  //   let costsOrCost = isPlural(item.name) ? "cost" : "costs";
  // read(`The ${item.name} ${costsOrCost} $${item.unitPrice}.`);
  // }
  return (
    <>
      <div
        className="product shelf-item"
        id={item.id}
        data-section={item.section}
        // onMouseOver={handleHover}
      >
        <img src={getImagePath(item.name)} alt="" width="100" />
        <div className="item-label">
          <h3>{capitalize(item.name)}</h3>
          <div className="item-price">
            <p>${item.unitPrice.toFixed(2)} /</p>
            <p>{item.displayUnit}</p>
          </div>
        </div>
        {item.count === 0 ? (
          <AddItem handleClick={handleClick} read={read} />
        ) : (
          <>
            <NumberPicker
              value={item.count}
              handleClick={handleClick}
              read={read}
            />
          </>
        )}
      </div>
    </>
  );
}
