/**
 * This component allows the user to add an item to their cart.
 */

export default function AddItem({ handleClick }) {
  return (
    <button className="edit-item-btn" onClick={(e) => handleClick(e, 1)}>
      Add
      <img src="/icons/cart-icon.png" alt="Cart icon" />
    </button>
  );
}
