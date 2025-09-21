/**
 * This component displays narrative text.
 */

export default function NarrationBar({ text, enableNext, handleClick }) {
  return (
    <div className="narration-bar">
      <p>{text}</p>
      {enableNext && <button onClick={handleClick}>Next</button>}
    </div>
  );
}
