/**
 * This component displays narrative text.
 */

export default function NarrationBar({ text, isClickable, handleClick }) {
  return (
    <div className="narration-bar">
      {text}
      {isClickable && <button onClick={handleClick}>Next</button>}
    </div>
  );
}
