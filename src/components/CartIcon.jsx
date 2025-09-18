/**
 * This component shows the total count of items in the cart.
 * When clicked, it redirects the user to cart details.
 */
import { Link } from "react-router";

export default function CartIcon({ data, read }) {
  function handleHover() {
    read(`I have ${data.count} items in my cart.`);
  }

  return (
    <>
      <Link
        to="/cart"
        className="cart-btn"
        aria-label="View cart"
        onMouseOver={handleHover}
      >
        <img src="/icons/cart-icon.png" alt="Cart icon" />
        {data.count}
      </Link>
    </>
  );
}
