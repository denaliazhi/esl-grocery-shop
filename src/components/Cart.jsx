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
          <Link to={`/${section}`}>{"<"} Back to store</Link>
          <div>
            <h2>Cart</h2>
            <p>{`(${cart.count} item${cart.count === 1 ? "" : "s"})`}</p>
          </div>
          {cart.count === 0 ? (
            <Link
              to=""
              aria-label="Disabled checkout button"
              className="checkout-btn disabled"
            >
              Checkout
            </Link>
          ) : (
            <Link className="checkout-btn" to="/checkout">
              Checkout
            </Link>
          )}
        </div>

        {cart.count > 0 ? (
          <>
            <div className="cart-items">
              {selectedItems.map((item) => (
                <CartItem item={item} key={item.id} handleClick={updateCount} />
              ))}
            </div>
            <hr />
            <div className="cart-total">
              <p>Total</p>
              <p>{cart.totalCost.toFixed(2)}</p>
            </div>
          </>
        ) : (
          <>
            <img
              src="/icons/cart.png"
              alt="Empty cart"
              className="empty-cart"
            />
            <p>Your cart is empty.</p>
          </>
        )}
      </div>
    </>
  );
}
