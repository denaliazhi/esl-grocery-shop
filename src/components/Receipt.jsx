/**
 * This component shows all items checked out by the user
 * in the format of a grocery store receipt.
 */

import { useOutletContext } from "react-router";
import ReceiptItem from "./ReceiptItem";

export default function Receipt() {
  const { cart, setLastEvent } = useOutletContext();

  function handleMouse(event, itemId) {
    setLastEvent({ target: event, id: itemId });
  }

  return (
    <>
      <div className="receipt-instruction">
        <p>
          <strong>Hint:</strong>
        </p>
        <p>Move your mouse over the receipt to "read" it.</p>
      </div>
      <div className="receipt">
        <div
          className="receipt-header"
          onMouseOver={() => handleMouse("receipt-header")}
        >
          <h2>Green Goods</h2>
          <p>123 Main Street</p>
          <p>San Francisco, CA</p>
        </div>
        <hr />
        <div className="receipt-items">
          {cart.items.map((item) => (
            <ReceiptItem
              key={item.id}
              item={item}
              handleMouse={() => handleMouse("receipt-item", item.id)}
            />
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
            <p>0.00</p>
          </div>
          <div onMouseOver={() => handleMouse("receipt-total")}>
            <p>Total</p>
            <p>${cart.totalCost.toFixed(2)}</p>
          </div>
        </div>
        <p>{`# ITEMS SOLD: ${cart.count}`}</p>
      </div>
    </>
  );
}
