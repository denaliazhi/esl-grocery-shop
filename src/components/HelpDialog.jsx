export default function HelpDialog({ location, show, handleClick }) {
  return (
    <>
      {show && (
        <div>
          <dialog open>
            <h3>Introduction</h3>
            <p>Learn how to describe a trip to the grocery store.</p>
            <ol>
              <li>Click on or hover over items on the screen.</li>
              <li>
                Review the sentences that appear in the message bar below.
              </li>
            </ol>
            <button onClick={handleClick}>
              {location === "/" ? "Start" : "Back"}
            </button>
          </dialog>
        </div>
      )}
      <button className="help-btn" onClick={handleClick}>
        Help
      </button>
    </>
  );
}
