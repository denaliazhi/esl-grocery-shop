/**
 * This component displays narrative text.
 */

export default function NarrationBar({ text, showNext, handleClick }) {
  return (
    <div className="narration-bar">
      <p>{text}</p>
      {showNext && <button onClick={handleClick}>Next</button>}
    </div>
  );
}
