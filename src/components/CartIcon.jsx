/**
 * This component shows the total count of items in the cart.
 * When clicked, it redirects the user to cart details.
 */
import { Link } from "react-router";

export default function CartIcon({ data, handleClick }) {
  return (
    <>
      <Link
        to="/cart"
        className="cart-btn"
        aria-label="View cart"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <img src="/icons/cart-icon.png" alt="Cart icon" />
        {data.count}
      </Link>
    </>
  );
}
