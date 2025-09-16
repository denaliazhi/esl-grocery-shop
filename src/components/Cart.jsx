/**
 * This component shows all items in a user's cart and
 * allows the user to modify / remove items before checkout.
 */
import { Link, useOutletContext } from "react-router";
import ShelfItem from "./ShelfItem";

export default function Cart() {
  const [section, items, updateCount, cartCount] = useOutletContext();

  let cart = [];
  function getCartItems() {
    for (let key of Object.keys(items)) {
      cart.push(...items[key].filter((item) => item.count > 0));
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
            <p>{`(${cartCount} items)`}</p>
          </div>
          {cartCount === 0 ? (
            <button className="disabled">Checkout</button>
          ) : (
            // TO DO: change button into link and redirect
            <button onClick={() => {}}>Checkout</button>
          )}
        </div>

        {cartCount > 0 ? (
          cart.map((item) => (
            <ShelfItem item={item} key={item.id} handleClick={updateCount} />
          ))
        ) : (
          // TO DO: add picture of empty cart
          <p>Your cart is empty.</p>
        )}
      </div>
    </>
  );
}
