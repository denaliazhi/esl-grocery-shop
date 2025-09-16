/**
 * This component shows all items in a user's cart and
 * allows the user to modify / remove items before checkout.
 */
import { Link, useOutletContext } from "react-router";
import CartItem from "./CartItem";
export default function Cart() {
  const [section, items, updateCount, cart] = useOutletContext();

  let selectedItems = [];
  function getCartItems() {
    for (let key of Object.keys(items)) {
      selectedItems.push(...items[key].filter((item) => item.count > 0));
    }
  }
  getCartItems();

  return (
    <>
      <div className="cart">
        <div className="cart-header">
          <Link to={`/${section}`}>Back to store</Link>
          <div>
            <h1>Cart</h1>
            <p>{`(${cart.count} items)`}</p>
          </div>
          {cart.count === 0 ? (
            <button className="disabled">Checkout</button>
          ) : (
            // TO DO: change button into link and redirect
            <button onClick={() => {}}>Checkout</button>
          )}
        </div>

        {cart.count > 0 ? (
          <>
            {selectedItems.map((item) => (
              <CartItem item={item} key={item.id} handleClick={updateCount} />
            ))}
            <hr />
            <p>Total</p>
            <p>{cart.totalCost.toFixed(2)}</p>
          </>
        ) : (
          // TO DO: add picture of empty cart
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
