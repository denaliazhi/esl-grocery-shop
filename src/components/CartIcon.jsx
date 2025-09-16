/**
 * This component shows the total count of items in the cart.
 * When clicked, it redirects the user to cart details.
 */
import { Link } from "react-router";

export default function Cart({ contents }) {
  let totalItems = 0;
  for (let section of Object.keys(contents)) {
    for (let item of contents[section]) {
      totalItems = totalItems + item.count;
    }
  }
  return (
    <>
      <Link to="/cart" className="cart-btn">
        {totalItems}
      </Link>
    </>
  );
}
