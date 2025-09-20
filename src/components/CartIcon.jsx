/**
 * This component shows the total count of items in the cart.
 * When clicked, it shows the cart details.
 */

export default function CartIcon({ data, handleClick, read }) {
  return (
    <>
      <button
        className="cart-btn"
        aria-label="View cart"
        onClick={() => {
          handleClick(true);
          read();
        }}
        onMouseOver={read}
      >
        <img src="/icons/cart-icon.png" alt="Cart icon" />
        {data.count}
      </button>
    </>
  );
}
