/**
 * This component shows all items in a user's cart and
 * allows the user to modify / remove items before checkout.
 */
import { Link } from "react-router";
import CartItem from "./CartItem";
export default function Cart({
  cart,
  handleClose,
  handleCheckout,
  handleMouse,
  updateCount,
}) {
  return (
    <div className="cart">
      <div className="cart-header">
        <button onClick={handleClose}>{"<"} Back to store</button>
        <div>
          <h2>Cart</h2>
          <p>{`(${cart.count} item${cart.count === 1 ? "" : "s"})`}</p>
        </div>
        {cart.count === 0 ? (
          <button
            className="checkout-btn disabled"
            onMouseOver={() => handleMouse({ target: "no-checkout" })}
          >
            Checkout
          </button>
        ) : (
          <button
            className="checkout-btn"
            onMouseOver={() => handleMouse({ target: "pre-checkout" })}
          >
            <Link to="/checkout" onClick={handleCheckout}>
              Checkout
            </Link>
          </button>
        )}
      </div>

      {cart.count > 0 ? (
        <>
          <div className="cart-items">
            {cart.items.map((item) => (
              <CartItem item={item} key={item.id} handleClick={updateCount} />
            ))}
          </div>
          <hr />
          <div className="cart-total">
            <p>Total</p>
            <p>${cart.totalCost.toFixed(2)}</p>
          </div>
        </>
      ) : (
        <>
          <img src="/icons/cart.png" alt="Empty cart" className="empty-cart" />
          <p>Your cart is empty.</p>
        </>
      )}
    </div>
  );
}
