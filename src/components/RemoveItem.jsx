/**
 * This component allows the user to remove an item that
 * they've added to their cart.
 */

export default function RemoveItem({ value, handleClick }) {
  return (
    <button className="remove-btn" onClick={(e) => handleClick(e, -value)}>
      <span></span> Remove
    </button>
  );
}
