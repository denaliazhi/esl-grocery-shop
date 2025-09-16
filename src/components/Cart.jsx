/**
 * This component shows all items in a user's cart and
 * allows the user to modify / remove items before checkout.
 */
import { Link, useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Cart() {
  const [section, items, setCount] = useOutletContext();

  let cart = [];
  function getCartItems() {
    for (let key of Object.keys(items)) {
      cart.push(...items[key].filter((item) => item.count > 0));
    }
  }
  getCartItems();

  let num = cart.length;

  return (
    <>
      <div className="cart-details">
        <div className="cart-header">
          <Link to={`/${section}`}>Back to store</Link>
          <div>
            <h1>Cart</h1>
            {/* num is wrong-- need to copy logic from cart icon */}
            <p>{`(${num} items)`}</p>
          </div>
          {num === 0 ? (
            <button className="disabled">Checkout</button>
          ) : (
            // TO DO: change button into link and redirect
            <button onClick={() => {}}>Checkout</button>
          )}
        </div>

        {num > 0 ? (
          cart.map((item) => (
            <ShelfItem item={item} key={item.id} handleClick={setCount} />
          ))
        ) : (
          // TO DO: add picture of empty cart
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
