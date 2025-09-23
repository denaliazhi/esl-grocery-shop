/**
 * This component renders details for an item in cart view.
 */
import NumberPicker from "./NumberPicker";
import RemoveItem from "./RemoveItem";
import { capitalize, getImagePath } from "../utils.js";

export default function CartItem({ item, handleClick }) {
  return (
    <div className="product cart-item" id={item.id} data-section={item.section}>
      <img src={getImagePath("products", item.name)} alt="" width="50" />
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
      <p>${item.totalCost.toFixed(2)}</p>
    </div>
  );
}
