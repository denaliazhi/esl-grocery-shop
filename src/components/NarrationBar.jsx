/**
 * This component displays narrative text.
 */

export default function NarrationBar({ text, isClickable, handleClick }) {
  return (
    <div aria-label="narration-bar" className="narration-bar" role="log">
      <p>{text}</p>
      {isClickable && <button onClick={handleClick}>Next</button>}
    </div>
  );
}
