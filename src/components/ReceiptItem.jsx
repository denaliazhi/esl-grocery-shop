/**
 * This component renders details for an item in the receipt.
 */
import { capitalize } from "../utils.js";

export default function ReceiptItem({ item, handleMouse }) {
  return (
    <div onMouseOver={handleMouse}>
      <p>{item.count}</p>
      <div>
        <p>{capitalize(item.name)},</p>
        <p>
          {item.unitPrice.toFixed(2)} / {item.displayUnit}
        </p>
      </div>
      <p>{item.totalCost.toFixed(2)}</p>
    </div>
  );
}
