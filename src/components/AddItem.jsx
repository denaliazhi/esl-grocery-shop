/**
 * This component allows the user to add an item to their cart.
 */

export default function AddItem({ handleClick }) {
  return (
    <button
      className="add-btn"
      onClick={(e) => handleClick(e.target.parentNode.id, 1)}
    >
      Add to Cart
    </button>
  );
}
