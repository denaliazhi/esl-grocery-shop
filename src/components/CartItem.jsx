/**
 * This component renders the details for an item in cart view.
 */
import NumberPicker from "./NumberPicker";
import RemoveItem from "./RemoveItem";
import { capitalize, getImagePath } from "../utils.js";

export default function CartItem({ item, handleClick }) {
  let totalCost = item.count * item.unitPrice;
  return (
    <>
      <div
        className="product cart-item"
        id={item.id}
        data-section={item.section}
      >
        <img src={getImagePath(item.name)} alt="" width="50" />
        <div>
          <p>{capitalize(item.name)},</p>
          <p>
            ${item.unitPrice.toFixed(2)} / {item.displayUnit}
          </p>
          <div className="edit-cart">
            <NumberPicker value={item.count} handleClick={handleClick} />
            <RemoveItem value={item.count} handleClick={handleClick} />
          </div>
        </div>
        <p>${totalCost.toFixed(2)}</p>
      </div>
    </>
  );
}
