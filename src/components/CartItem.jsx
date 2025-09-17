/**
 * This component renders the details for an item in cart view.
 */
import AddItem from "./AddItem";
import NumberPicker from "./NumberPicker";
import RemoveItem from "./RemoveItem";

export default function CartItem({ item, handleClick }) {
  let totalCost = item.count * item.unitPrice;
  return (
    <>
      <div
        className="product cart-item"
        id={item.id}
        data-section={item.section}
      >
        <img src={`/${item.name.replace(" ", "-")}.png`} alt="" width="50" />
        <div>
          <p>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</p>
          <p>
            ${item.unitPrice.toFixed(2)} / {item.displayUnit}
          </p>
          <NumberPicker value={item.count} handleClick={handleClick} />
          <RemoveItem value={item.count} handleClick={handleClick} />
        </div>
        <p>${totalCost.toFixed(2)}</p>
      </div>
    </>
  );
}
