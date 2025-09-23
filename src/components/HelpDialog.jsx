/**
 * This component provides directions at the start
 * of the lesson. It's a dialog box that can be closed
 * or re-opened at any time.
 */

export default function HelpDialog({ isOpen, handleClick, closeText }) {
  return (
    <>
      {isOpen && (
        // Wrapper div to dim/blur content behind dialog box
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
            {/* Button to close dialog box */}
            <button onClick={handleClick}>{closeText}</button>
          </dialog>
        </div>
      )}
      {/* Button to open dialog box */}
      <button className="help-btn" onClick={handleClick}>
        Help
      </button>
    </>
  );
}
