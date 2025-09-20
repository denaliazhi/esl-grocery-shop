import { useOutletContext } from "react-router";
import ReceiptItem from "./ReceiptItem";

export default function Receipt() {
  const [, , , cart, , setLastEvent] = useOutletContext();

  return (
    <div className="receipt">
      <div className="receipt-header">
        <h2>Green Goods</h2>
        <p>123 Main Street</p>
        <p>San Francisco, CA</p>
      </div>

      <div className="receipt-items">
        {cart.items.map((item) => (
          <ReceiptItem item={item} key={item.id} />
        ))}
      </div>
      <hr />
      <div className="receipt-total">
        <div>
          <p>Subtotal</p>
          <p>{cart.totalCost.toFixed(2)}</p>
        </div>
        <div>
          <p>Tax</p>
          <p>$0.00</p>
        </div>
        <div>
          <p>Total</p>
          <p>{cart.totalCost.toFixed(2)}</p>
        </div>
      </div>
      <p>{`# ITEMS SOLD: ${cart.count}`}</p>
    </div>
  );
}
