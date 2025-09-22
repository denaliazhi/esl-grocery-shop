/**
 * This component shows the total count of items in the cart.
 * When clicked, it shows the cart details.
 */

export default function CartIcon({ data, handleClick, read, animate }) {
  return (
    <>
      <button
        className={
          animate === "highlight" ? "cart-btn highlighted" : "cart-btn"
        }
        aria-label="View cart"
        onClick={() => {
          handleClick();
          read();
        }}
        onMouseOver={read}
        style={
          animate === "stretch" || animate === "squeeze"
            ? { animationName: animate }
            : null
        }
      >
        <img src="/icons/cart-icon.png" alt="Cart icon" />
        {data.count}
      </button>
    </>
  );
}
