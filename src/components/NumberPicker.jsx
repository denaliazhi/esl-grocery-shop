/**
 * This component allows the user to increase/decrease
 * the amount of an item that they've added to their cart.
 */

export default function NumberPicker({ value, handleClick }) {
  return (
    <div className="edit-item-btn">
      <button onClick={(e) => handleClick(e, -1)}>-</button>
      <p>{value}</p>
      <button onClick={(e) => handleClick(e, 1)}>+</button>
    </div>
  );
}
