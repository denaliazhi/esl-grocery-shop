/**
 * This component displays narrative text.
 */

export default function NarrationBar({ text, isClickable, handleClick }) {
  return (
    <div className="narration-bar">
      <p>{text}</p>
      {isClickable && <button onClick={handleClick}>Next</button>}
    </div>
  );
}
