/**
 * This component shows the total count of items in the cart.
 * When clicked, it shows the cart details.
 */

export default function CartIcon({ cart, handleClick, handleMouse, animate }) {
  return (
    <>
      <button
        className={
          animate === "highlight" ? "cart-btn highlighted" : "cart-btn"
        }
        aria-label="View cart"
        onClick={handleClick}
        onMouseOver={() => handleMouse({ target: "cart" })}
        style={
          animate === "stretch" || animate === "squeeze"
            ? { animationName: animate }
            : null
        }
      >
        <img src="/icons/cart-icon.png" alt="Cart icon" />
        <p>{cart.count}</p>
      </button>
    </>
  );
}
