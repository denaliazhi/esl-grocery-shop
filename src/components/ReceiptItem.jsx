import { capitalize } from "../utils.js";

export default function ReceiptItem({ item }) {
  return (
    <div className="receipt-item">
      <div>
        <p>{capitalize(item.name)},</p>
        <p>
          ${item.unitPrice.toFixed(2)} / {item.displayUnit}
        </p>
      </div>
      <p>${item.totalCost.toFixed(2)}</p>
    </div>
  );
}
