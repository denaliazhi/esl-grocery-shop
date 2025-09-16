/**
 * This component shows the total count of items in the cart.
 * When clicked, it redirects the user to cart details.
 */
import { Link } from "react-router";

export default function CartIcon({ count }) {
  return (
    <>
      <Link to="/cart" className="cart-btn">
        {count}
      </Link>
    </>
  );
}
